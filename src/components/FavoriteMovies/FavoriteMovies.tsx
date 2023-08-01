import React, { FC, ReactNode } from 'react';

import { useFetching } from '../../myCostumeHook';
import { IMovieListResponse } from '../../interfaces';
import { favoriteMovieService } from '../../services';
import { ErrorComponent, LoadingSpinner } from '../../UI';
import { FavoriteMovie, FilterForm } from '../index';

interface IProps {
    children?: ReactNode
}

const FavoriteMovies: FC<IProps> = () => {

    const { data, error, isLoading, setTrigger } = useFetching<IMovieListResponse>(favoriteMovieService.getAll);

    if (isLoading) return (<LoadingSpinner/>);
    if (error) return (<ErrorComponent message={error}/>);

    const results = data?.results;

    return (
        <div style={{ padding: '20px 0' }}>
            <FilterForm/>
            {!! results?.length && results.map(value => <FavoriteMovie setTrigger={setTrigger} movie={value} key={value.id}/>)}
        </div>
    );
};

export { FavoriteMovies };
