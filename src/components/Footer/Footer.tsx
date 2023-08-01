import React, { FC, ReactNode } from 'react';

import styles from './Footer.module.css';
interface IProps {
    children?: ReactNode

}

const Footer: FC<IProps> = ( ) => {
    return (
        <footer className={styles.footer}>

            <div></div>
        </footer>
    );
};

export { Footer };
