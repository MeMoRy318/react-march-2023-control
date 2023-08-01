import React, { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { IMovies } from '../../interfaces';
import { urls } from '../../configs';

import styles from './MoviesList.module.css';

interface IProps {
    children?: ReactNode
    movie: IMovies
}

const MoviesList: FC<IProps> = ({ movie }) => {

    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { id, poster_path, title, release_date, vote_average } = movie;

    const img = poster_path ? urls.posterUrl.base + poster_path : urls.notFoundPoster.base;
    const data = +release_date.split('-')[0];

    return (
        <div className={styles.card__wrap}>
            <div
                style={{ backgroundImage: `url(${img})` }}
                className={styles.card}
                onClick={() => navigate(`/movieInfo/${id}`) }
            >
                <div className={styles.badges}>
                    <span className={ vote_average > 5 ? styles.green : styles.red }>{vote_average}</span>
                    {data === new Date().getFullYear() &&  <span className={styles.new__badges}>NEW</span>}
                </div>
            </div>
            <div className={styles.info}>
                <h2>{title}</h2>
                <p>{data}, <span>Movie</span></p>
            </div>
        </div>
    );
};

export { MoviesList };

