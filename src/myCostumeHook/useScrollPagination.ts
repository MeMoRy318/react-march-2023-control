import { useEffect, useRef, useState } from 'react';

import { IRes } from '../services';


type ICallback<T> = () => IRes<T>;

interface IFetching<T> {
    data: T | null
    error: string
    isLoading: boolean
}

function useFetching<T>(callback: ICallback<T>, params:object = {}, ...args:unknown[]): IFetching<T> {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [data, setData] = useState<T | null>(null);


    useEffect(() => {
        setData(null);
    }, [...Object.values(params)]);


    useEffect(() => {
        setIsLoading(true);
        callback()
            .then(({ data }) => {
                setData(prevState => {
                    // @ts-ignore
                    if (prevState?.results) {
                        // @ts-ignore
                        return   { ...data, results: [...prevState?.results, ...data?.results] };
                    }
                    return data;
                });
            })
            .catch((e: Error) => setError(e.message))
            .finally(() => setIsLoading(false));
    }, [...args, ...Object.values(params)]);


    return { data, error, isLoading };
}


export function useScrollPagination<T, I extends Element>(
    callback: () =>IRes<T>,
    params: object = {},
) {

    const lastElementRef = useRef<I | null>(null);
    const observer = useRef<IntersectionObserver>();
    const [page, setPage] = useState<number>(1);

    const fn = callback.bind(null, { ...params, page });

    const { data, isLoading, error } = useFetching<T>(fn, params, page);

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current?.disconnect();

        const callback: IntersectionObserverCallback = (entries, observer) => {
            if (
                entries[0].isIntersecting &&
                // @ts-ignore
                data?.page < data?.total_pages!
            ) {
                setPage((prevPage) => prevPage + 1);
            }
        };

        observer.current = new IntersectionObserver(callback);
        if (lastElementRef.current) {
            observer.current.observe(lastElementRef.current);
        }
    }, [isLoading]);

    return { lastElementRef, data, isLoading, error };
}
