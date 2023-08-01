import { IMovieListResponse } from '../interfaces';
import { urls } from '../configs';

import { axiosService, IRes } from './axiosService';


interface IFavoriteMovieService {
    getAll: ( ) => IRes<IMovieListResponse>
    addFavorite: ( id: number, boolean: boolean ) => IRes<void>
}

const favoriteMovieService:IFavoriteMovieService = {
    getAll: ( ):IRes<IMovieListResponse> => axiosService.get(urls.getFavorite.base(13652460)),
    addFavorite: ( id: number, boolean: boolean ): IRes<void> => axiosService.post(urls.postFavorite.base(13652460), { media_type: 'movie', media_id: id, favorite: boolean }),
};

export { favoriteMovieService };
