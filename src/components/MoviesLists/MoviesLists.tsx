import React, { FC, ReactNode, useContext } from 'react';

import { movieService } from '../../services';
import { IMovieListResponse } from '../../interfaces';
import { MoviesList } from '../index';
import { AutoImageSlider, ErrorComponent, LoadingSpinner } from '../../UI';
import { useScrollPagination } from '../../myCostumeHook';

import { ThemeContext } from '../../hok';

import styles from './MoviesLists.module.css';

interface IProps {
    children?: ReactNode

}

const MoviesLists: FC<IProps> = () => {

    const { boolean } = useContext(ThemeContext);
    const { lastElementRef, error, isLoading, data } =
        useScrollPagination<IMovieListResponse, HTMLDivElement>(movieService.getAll);

    if (isLoading) return (<LoadingSpinner/>);
    if (error) return (<ErrorComponent message={error}/>);

    const results = data?.results;

    return (
        <div className={styles.content}>
            {
                !!results?.length && boolean &&  <AutoImageSlider movies={results}/>
            }
            {
                !!results?.length && results.map(movie => <MoviesList key={movie.id} movie={ movie }/>)
            }
            <div ref={lastElementRef}></div>
        </div>
    );
};

export { MoviesLists };
