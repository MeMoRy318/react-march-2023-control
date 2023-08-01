import { IMovie, IMovieListResponse } from '../interfaces';
import { urls } from '../configs';

import { axiosService, IRes } from './axiosService';

interface IMovieService {
    getAll: (params?: object) => IRes<IMovieListResponse>
    getById: (id: number) => IRes<IMovie>
    search: (query: string, page?:number) => IRes<IMovieListResponse>
}
const movieService: IMovieService = {
    getAll: ( params?: object ): IRes<IMovieListResponse> => axiosService.get(urls.movie.base, { params: { ...params } }),
    getById: ( id: number ):IRes<IMovie> => axiosService.get(urls.movie.byId(id)),
    search: ( query: string, page?:number ):IRes<IMovieListResponse> => axiosService.get(urls.search.base, { params: { query, page } }),
};

export { movieService };
