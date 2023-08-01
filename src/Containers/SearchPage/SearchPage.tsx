import React, { FC, ReactNode } from 'react';
import { useParams } from 'react-router-dom';

import { SearchMovies } from '../../components';

interface IProps {
    children?: ReactNode
}

const SearchPage: FC<IProps> = () => {

    const { query } = useParams<{query:string}>();
    return (
        <>
            <SearchMovies query={query!}/>
        </>
    );
};

export { SearchPage };
