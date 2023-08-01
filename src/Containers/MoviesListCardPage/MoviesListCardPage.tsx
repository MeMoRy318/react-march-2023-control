import React, { FC, ReactNode } from 'react';
import { useParams } from 'react-router-dom';


import { MoviesListCard } from '../../components';

interface IProps {
    children?: ReactNode
}

const MoviesListCardPage: FC<IProps> = () => {

    const { movieId  } = useParams<{ movieId:string }>();

    return (
        <>
            {!!movieId && <MoviesListCard movieId={+movieId}/>}
        </>
    );
};

export { MoviesListCardPage };
