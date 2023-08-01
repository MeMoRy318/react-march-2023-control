import React, { FC, ReactNode } from 'react';

import styles from './LoadingSpinner.module.css';

interface IProps {
    children?: ReactNode
}

const LoadingSpinner: FC<IProps> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.spinner}></div>
        </div>
    );
};

export { LoadingSpinner };
