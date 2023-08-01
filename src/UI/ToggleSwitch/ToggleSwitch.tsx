import React, { FC, ReactNode, useContext } from 'react';

import { ThemeContext } from '../../hok';

import styles from './ToggleSwitch.module.css';

interface IProps {
    children?:ReactNode
}
const ToggleSwitch:FC<IProps> = () => {
    const { boolean, setBoolean } = useContext(ThemeContext);

    const handleToggle = () => {
        setBoolean(prevState => !prevState);
    };

    return (
        <div>
            <label className={styles.switch}>
                <input type="checkbox" checked={boolean} onChange={handleToggle} />
                <span className={styles.slider}></span>
            </label>
        </div>
    );
};

export { ToggleSwitch };
