import React, { FC, ReactNode } from 'react';

import { BurgerMenu, Logotype, ToggleSwitch, UserInfo } from '../../UI';
import { SearchInput } from '../index';

import styles from './Header.module.css';

interface IProps {
    children?: ReactNode

}

const Header: FC<IProps> = () => {
    return (
        <header className={styles.header} >
            <div className={styles.header__content}>
                <BurgerMenu/>
                <Logotype/>
                <div className={styles.header__searchInput}>
                    <SearchInput/>
                </div>
                <div className={styles.toggle}>
                    <ToggleSwitch/>
                </div>
                <div className={styles.userInfo}>
                    <UserInfo/>
                </div>
            </div>
        </header>
    );
};

export { Header };
