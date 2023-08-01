import React, { FC, ReactNode } from 'react';

import { ICast } from '../../interfaces';
import { urls } from '../../configs';

import styles from './PosterPreview.module.css';

interface IProps {
    children?: ReactNode
    cast: ICast
}

const PosterPreview: FC<IProps> = ({ cast }) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { original_name, profile_path } = cast;

    const profilePath = profile_path ? urls.posterUrl.base + profile_path : urls.notFoundPoster.base;

    return (
        <div
            className={styles.poster}
            style={{
                backgroundImage: `url(${profilePath})`,
            }}>

            <h2 className={styles.poster_name}>
                {original_name}
            </h2>
        </div>
    );
};

export { PosterPreview };
