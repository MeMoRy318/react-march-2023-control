import React, { FC, ReactNode, useContext } from 'react';

import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../components';


import { ThemeContext } from '../hok';

import styles from './MyLoyout.module.css';


interface IProps {
    children?: ReactNode
}

const MyLayout: FC<IProps> = () => {

    const { boolean } = useContext(ThemeContext);
    return (
        <div className={`${styles.wrapper} ${boolean && styles.active}`}>
            <Header/>
            <div className={styles.content}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export { MyLayout };
