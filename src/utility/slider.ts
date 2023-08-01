import { IMovies } from '../interfaces';
import { urls } from '../configs';

export function splitArrayIntoChunks<T>(array:T[], count: number): { chunk:T[]; totalCount:number  } {
    const startIndex = (count - 1) * 5;
    const totalCount = Math.ceil((array.length - 1 )  / 5);
    const endIndex = Math.min(startIndex + 5, array.length);
    const chunk = array.slice(startIndex, endIndex);
    if (chunk.length  < 5) {
        return { chunk: array.slice(-5), totalCount };
    }

    return { chunk, totalCount };
}

export function mapArray(array:IMovies[]):{ imageUrl: string }[] {
    const result = array.filter(value => value.backdrop_path)
        .map(value => (
            { imageUrl: urls.posterUrl + value.backdrop_path }
        ));

    return result;
}
