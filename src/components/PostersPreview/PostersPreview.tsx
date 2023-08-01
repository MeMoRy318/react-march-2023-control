import React, { FC, ReactNode, useMemo, useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import { ICast } from '../../interfaces';
import { splitArrayIntoChunks } from '../../utility';
import { PosterPreview } from '../index';

import styles from './PostersPreview.module.css';

interface IProps {
    children?: ReactNode
    cast: ICast[]
}

const PostersPreview: FC<IProps> = ({ cast }) => {
    const [count, setCount] = useState<number>(1);

    const { chunk, totalCount } = useMemo(() => {
        return splitArrayIntoChunks<ICast>(cast, count);
    }, [cast, count]);

    const handleNext = () => {
        setCount((prevCount) => Math.min(prevCount + 1, totalCount));
    };

    const handlePrev = () => {
        setCount((prevCount) => Math.max(prevCount - 1, 1));
    };

    return (
        <div className={styles.posters}>
            <div className={styles.buttonContainer}>
                <button className={styles.posters__button} onClick={handlePrev}>
                    <FaArrowCircleLeft />
                </button>
                <button className={styles.posters__button} onClick={handleNext}>
                    <FaArrowCircleRight />
                </button>
            </div>
            <div className={styles.posters__card}>
                {chunk.map((item) => (
                    <PosterPreview cast={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export { PostersPreview };
