const baseURL: string = 'https://api.themoviedb.org/3/';
const posterUrl:string = 'https://image.tmdb.org/t/p/original/';
const youTube:string = 'https://www.youtube.com/embed/';
const notFoundPoster:string = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';
const list:string = '/list';
const credits:string = '/credits';
const genre:string = '/genre';
const search:string = '/search';
const movie:string = '/movie';
const movies:string = '/movies';
const videos:string = '/videos';
const discover:string = '/discover';
const account:string = '/account';
const favorite:string = '/favorite';

interface IUrls {
    movie: {
        base: string
        byId: (id: number) => string
    }
    genre: {
        base: string
    }
    posterUrl: {
        base: string
    }
    credits: {
        base: (id: number) => string
    }
    videos: {
        base: (id: number) => string
    }
    youTube: {
        base: string
    }
    search: {
        base: string
    }
    postFavorite: {
        base: (id: number) => string
    }
    getFavorite: {
        base: (id: number) => string
    }
    notFoundPoster: {
        base: string
    }
}
const urls:IUrls = {
    movie: {
        base: `${discover}/${movie}`,
        byId: ( id: number ):string => `${movie}/${id}`,
    },
    genre: { base: `${genre}${movie}${list}` },
    posterUrl: { base: posterUrl },
    credits: { base: ( id: number ):string => `${movie}/${id}${credits}` },
    videos: { base: ( id: number ):string => `${movie}/${id}${videos}` },
    youTube: { base: youTube },
    search: { base: `${search}${movie}` },
    postFavorite: { base: ( id: number ):string => `${account}/${id}${favorite}` },
    getFavorite: { base: ( id: number ):string => `${account}/${id}${favorite}${movies}` },
    notFoundPoster: { base: notFoundPoster },
};

export { urls, baseURL };
