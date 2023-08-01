import React, { FC, ReactNode } from 'react';

import { IForm, IMovieListResponse } from '../../interfaces';
import { ErrorComponent, LoadingSpinner } from '../../UI';
import { useScrollPagination } from '../../myCostumeHook';
import { movieService } from '../../services';
import { pathParams } from '../../utility';
import { MoviesList } from '../index';

import styles from './FilterMovies.module.css';

interface IProps {
    children?: ReactNode
    state:IForm
    paramsId: number
}

const FilterMovies: FC<IProps> = ({ state, paramsId }) => {

    const params = pathParams(state, paramsId);
    const { lastElementRef, error, isLoading, data } =
        useScrollPagination<IMovieListResponse, HTMLDivElement>(movieService.getAll, params);

    if (isLoading) return (<LoadingSpinner/>);
    if (error) return (<ErrorComponent message={error}/>);

    const results = data?.results;

    return (
        <div className={styles.content}>
            {
                !!results?.length && results.map(movie => <MoviesList key={movie.id} movie={ movie }/>)
            }
            <div ref={lastElementRef}></div>
        </div>
    );
};

export { FilterMovies };
