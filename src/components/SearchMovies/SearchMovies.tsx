import React, { FC, ReactNode, useState } from 'react';

import { useFetching } from '../../myCostumeHook';
import { movieService } from '../../services';
import { IMovieListResponse } from '../../interfaces';
import { ErrorComponent, LoadingSpinner, Pagination } from '../../UI';
import { MoviesList } from '../index';

import styles from './SearchMovies.module.css';

interface IProps {
    children?: ReactNode
    query: string
}

const SearchMovies: FC<IProps> = ({ query }) => {

    const [page, setPage] = useState<number>(1);

    const { data, isLoading, error } =
        useFetching<IMovieListResponse>(() => movieService.search(query, page), page, query);

    if (isLoading) return (<LoadingSpinner/>);
    if (error) return (<ErrorComponent message={error}/>);

    const results = data?.results;


    return (
        <div>
            <div className={styles.movie__row}>
                {
                    !!results?.length && results.map(movie => <MoviesList key={movie.id} movie={ movie }/>)
                }
            </div>
            {
                !!data && <Pagination totalPages={data.total_pages} page={data.page} setQuery={setPage}/>
            }
        </div>
    );
};

export { SearchMovies };
