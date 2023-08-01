import React, { FC, ReactNode, useMemo } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { createPagesArrayNumber } from '../../utility';

import styles from './Pagination.module.css';

interface IProps {
    children?: ReactNode
    totalPages: number
    page: number
    setQuery: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: FC<IProps> = ({ page, totalPages, setQuery }) => {

    const pages = useMemo(() => {
        return  createPagesArrayNumber(totalPages, page);
    }, [page, totalPages]);


    return (
        <div className={styles.pagination}>
            <div className={styles.pagination__row}>

                <div className={styles.pagination__btnBox}>
                    <button className={styles.pagination__btnPrev} disabled={page === 1} onClick={() => setQuery(prev => prev - 1)}>
                        <FaChevronLeft className={styles.pagination__icon}/>
                    </button>
                </div>

                <div className={styles.pagination__page}>
                    {pages.map(value =>
                        <span key={value} className={ value === page ? styles.active : 'default'} onClick={() => setQuery(value)}>
                            {value}
                        </span>)}
                </div>

                <div className={styles.pagination__btnBox}>
                    <button className={styles.pagination__btnPrev} disabled={page === totalPages} onClick={() => setQuery(prev => prev + 1)}>
                        <FaChevronRight className={styles.pagination__icon}/>
                    </button>
                </div>

            </div>
        </div>
    );
};

export { Pagination };
