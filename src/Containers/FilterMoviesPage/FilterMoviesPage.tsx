import React, { FC, ReactNode } from 'react';


import { useParams } from 'react-router-dom';

import { FilterForm, FilterMovies } from '../../components';
import { useMyLocation } from '../../myCostumeHook';
import { IForm } from '../../interfaces';

interface IProps {
    children?: ReactNode
}


const FilterMoviesPage: FC<IProps> = () => {

    const { paramsId = 0  } = useParams<{paramsId:string}>();
    const { state  } = useMyLocation<IForm>();


    return (
        <>
            <FilterForm/>
            <FilterMovies state={state} paramsId={+paramsId}/>
        </>
    );
};

export { FilterMoviesPage };
