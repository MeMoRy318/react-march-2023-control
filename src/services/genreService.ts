import { IGenres } from '../interfaces';
import { urls } from '../configs';

import { axiosService, IRes } from './axiosService';

interface IGenreService {
    getAll: () => IRes<IGenres>
}
const genreService: IGenreService = {
    getAll: ():IRes<IGenres> => axiosService.get(urls.genre.base),
};

export { genreService };
