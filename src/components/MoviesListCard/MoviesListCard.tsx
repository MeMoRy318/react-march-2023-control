import React, { FC, ReactNode } from 'react';

import { ICreditsInterface, IMovie } from '../../interfaces';
import { useFetching } from '../../myCostumeHook';
import { creditService, movieService } from '../../services';
import { ErrorComponent, LoadingSpinner } from '../../UI';
import { MovieInfo, PostersPreview } from '../index';

import styles from './MoviesListCard.module.css';

interface IProps {
    children?: ReactNode
    movieId: number
}

const MoviesListCard: FC<IProps> = ({ movieId }) => {

    const fetching = useFetching<IMovie>(() => movieService.getById(movieId), movieId);
    const { data, isLoading, error } = fetching;

    const fetchingCredit = useFetching<ICreditsInterface>(() => creditService.getAll(movieId), movieId);
    const { data: dataCredit, isLoading: isLoadingCredit, error: errorCredit } = fetchingCredit;

    if (isLoading || isLoadingCredit) return (<LoadingSpinner/>);
    if (error || errorCredit) return (<ErrorComponent message={error || errorCredit}/>);

    return (
        <div className={styles.moviesList}>
            {!!data &&  <MovieInfo movie={data}/>}
            {!!dataCredit?.cast?.length && <PostersPreview cast={dataCredit.cast}/>}
        </div>
    );
};

export { MoviesListCard };
