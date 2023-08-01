import React, { FC, ReactNode } from 'react';

import { MoviesLists } from '../../components';

interface IProps {
    children?: ReactNode
}

const MoviesPage: FC<IProps> = () => {
    return (
        <>
            <MoviesLists/>
        </>
    );
};

export { MoviesPage };
