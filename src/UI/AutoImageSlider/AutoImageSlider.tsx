import React, { FC, ReactNode, useMemo } from 'react';
import ImageGallery from 'react-image-gallery';
import './asd.css';

import { IMovies } from '../../interfaces';
import { mapMovieImg } from '../../utility';

interface IProps {
    children?: ReactNode
    movies: IMovies[]
}

const AutoImageSlider: FC<IProps> = ({ movies }) => {
    const images = useMemo(() => {
        return mapMovieImg(movies.slice(0, 15));
    }, []);

    return (
        <div style={{ width: '100%', padding: '10px' }}>
            <ImageGallery
                items={images}
                showThumbnails={true}
                showFullscreenButton={false}
                showPlayButton={false}
                autoPlay={true}
                slideInterval={7000}
                additionalClass={'qwe'}
                lazyLoad={true}
            />
        </div>
    );
};

export { AutoImageSlider };
