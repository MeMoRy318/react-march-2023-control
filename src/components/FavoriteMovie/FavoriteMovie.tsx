import React, { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { IMovies } from '../../interfaces';
import { StarsRating } from '../../UI';
import { urls } from '../../configs';
import { favoriteMovieService } from '../../services';

import styles from './FavoriteMovie.module.css';

interface IProps {
    children?: ReactNode
    movie: IMovies
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>
}

const FavoriteMovie: FC<IProps> = ({ movie, setTrigger }) => {
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { id, title, poster_path, release_date, vote_count, overview, original_language } = movie;
    const [year] = release_date.split('-');
    const img = poster_path ? urls.posterUrl.base + poster_path : urls.notFoundPoster.base;

    const deleteFavorites = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.stopPropagation();
        await favoriteMovieService.addFavorite(id, false);
        setTrigger(prevState => !prevState);
    };

    return (
        <div className={styles.favoriteMovie} onClick={() => navigate(`/movieInfo/${id}`)}>
            <div>
                <img src={img} alt={title} />
            </div>
            <div className={styles.movieDetails}>
                <div className={styles.movieTitle}>{title}</div>
                <div className={styles.movieInfo}>
                    <span>Release:</span> {year},
                </div>
                <div className={styles.movieInfo}>
                    <span>Rating:</span> <StarsRating rating={vote_count} />
                </div>
                <div className={styles.movieInfo}>
                    <span>Countries:</span> {original_language}
                </div>
                <div className={styles.movieDescription}>
                    <h3>Description</h3>
                    {overview}
                </div>
            </div>
            <div className={styles.buttonWarp}>
                <div>
                    <button className={styles.playButton}>
                        Play
                    </button>
                </div>
                <div>
                    <button className={styles.deleteButton} onClick={deleteFavorites}>
                        Delete Favorite
                    </button>
                </div>
            </div>
        </div>
    );
};

export { FavoriteMovie };
