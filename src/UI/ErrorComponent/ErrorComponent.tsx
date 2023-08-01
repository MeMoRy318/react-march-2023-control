import React, { FC, ReactNode } from 'react';

import styles from './ErrorComponent.module.css';

interface IProps {
    children?: ReactNode
    message: string
}

const ErrorComponent: FC<IProps> = ({ message }) => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>!</div>
            <p className={styles.message}>{message}</p>
        </div>
    );
};

export { ErrorComponent };
