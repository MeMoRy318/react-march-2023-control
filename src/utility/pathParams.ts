import { IForm } from '../interfaces';

interface IPathParams {
    with_genres?: string | number
    'vote_average.gte'?: string
    'vote_average.lte'?: string
    primary_release_year?: string
    sort_by?:string
}

export const pathParams = (params: IForm | null, paramsId: number): IPathParams => {
    if (params && paramsId) {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { with_genres, vote_average_gte, vote_average_lte, ...obj } = params;
        return {
            ...obj,
            with_genres: paramsId.toString(),
            'vote_average.gte': vote_average_gte,
            'vote_average.lte': vote_average_lte,
        };
    } else if (paramsId) {
        return {
            with_genres: paramsId.toString(),
            'vote_average.gte': '1',
            'vote_average.lte': '10',
            primary_release_year: '2023',
            sort_by: 'popularity.desc',
        };
    } else {
        return {};
    }
};
