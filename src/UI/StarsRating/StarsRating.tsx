import React, { FC, ReactNode } from 'react';

import styles from './StarsRating.module.css';

interface IProps {
    children?: ReactNode
    rating: number
}

const StarsRating: FC<IProps> = ({ rating }) => {
    return (
        <div className={styles.rating}>
            <div className={styles.rating_stars}>

                <div className={styles.rating_stars_back}>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                </div>

                <div className={styles.rating_stars_fill}
                    style={{ width: `${Math.round(rating * 5) * 2}%` }}>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                </div>

            </div>
        </div>
    );
};

export { StarsRating };
