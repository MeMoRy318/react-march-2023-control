import React, { FC, ReactNode } from 'react';
import { FaUserAlt } from 'react-icons/fa';

import styles from './UserInfo.module.css';
interface IProps {
    children?: ReactNode
}

const UserInfo: FC<IProps> = () => {
    return (
        <div className={styles.userInfo}>
            <div className={styles.userInfo__icon}><FaUserAlt/></div>
            <div className={styles.userInfo__content}>
                <div>Name Leanne Graham</div>
                <div>User name Bret</div>
                <div>email Sincere@april.biz</div>
            </div>
        </div>
    );
};

export { UserInfo };
