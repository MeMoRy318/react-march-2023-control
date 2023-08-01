import React, { useEffect, useState } from 'react';

import { IRes } from '../services';

type ICallback<T> = () => IRes<T>;
interface IFetching<T> {
    data: T | null
    error: string
    isLoading: boolean
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>
}

export function useFetching<T>(callback: ICallback<T>, ...args:unknown[]): IFetching<T> {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [data, setData] = useState<T | null>(null);
    const [trigger, setTrigger] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        callback()
            .then(({ data }) => setData(data))
            .catch((e: Error) => setError(e.message))
            .finally(() => setIsLoading(false));
    }, [...args, trigger]);

    return { data, error, isLoading, setTrigger };
}
