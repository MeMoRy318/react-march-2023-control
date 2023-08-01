import React, { FC, ReactNode } from 'react';

import { FavoriteMovies } from '../../components';

interface IProps {
    children?: ReactNode
}

const FavoriteMoviesPage: FC<IProps> = () => {
    return (
        <>
            <FavoriteMovies/>
        </>
    );
};

export { FavoriteMoviesPage };
