import React, { FC, ReactNode } from 'react';

import { useNavigate } from 'react-router-dom';

import { ERouterPoints } from '../../configs';

import styles from './Logotype.module.css';

interface IProps {
    children?: ReactNode
}

const Logotype: FC<IProps> = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.container} onClick={() => navigate(ERouterPoints.BASE)}>
            <span className={styles.pulsate}>KINO</span>
            <span className={styles.neon}>MOVIE</span>
        </div>
    );
};

export { Logotype };
