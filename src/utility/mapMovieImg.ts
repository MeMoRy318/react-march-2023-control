import { IMovies } from '../interfaces';
import { urls } from '../configs';

interface IMapMovieImg   {
    original: string
    thumbnail: string
    description: string
}
export const mapMovieImg = (movies:IMovies[]):IMapMovieImg[] => {
    const result = movies.filter( value => value.poster_path && value.backdrop_path)
        .map(value => ({
            thumbnail: urls.posterUrl.base + value.poster_path,
            original: urls.posterUrl.base + value.backdrop_path,
            description: value.title,
        }));
    return result;
};
