import { createBrowserRouter, Navigate } from 'react-router-dom';

import { MyLayout } from './layout';
import { ERouterPoints } from './configs';
import {
    FavoriteMoviesPage,
    FilterMoviesPage,
    MoviesListCardPage,
    MoviesPage,
    NotFoundPage,
    SearchPage,
} from './Containers';

const router = createBrowserRouter([
    {
        path: ERouterPoints.BASE,
        element: <MyLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={ERouterPoints.MOVIES_LIST}/>,
            },
            {
                path: ERouterPoints.MOVIES_LIST,
                element: <MoviesPage/>,
            },
            {
                path: ERouterPoints.MOVIE_ID,
                element: <MoviesListCardPage/>,
            },
            {
                path: ERouterPoints.FILTER,
                element: <FilterMoviesPage/>,
            },
            {
                path: ERouterPoints.SEARCH,
                element: <SearchPage/>,
            },
            {
                path: ERouterPoints.FAVORITE,
                element: <FavoriteMoviesPage/>,
            },
            {
                path: ERouterPoints.NOT_FOUND_PAGE,
                element: <NotFoundPage/>,
            },
        ],
    },
]);

export { router };
