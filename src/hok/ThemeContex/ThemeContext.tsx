import React, { createContext, FC, ReactNode, useState } from 'react';

interface IProps {
    children: ReactNode
}

export interface IThemeContext {
    boolean: boolean
    setBoolean:React.Dispatch<React.SetStateAction<boolean>>

}
const defaultValue = {
    boolean: false,
    setBoolean: () => '',
};
export const ThemeContext:React.Context<IThemeContext> = createContext<IThemeContext>(defaultValue);

const ThemeContextTSX: FC<IProps> = ({ children }) => {
    const [boolean, setBoolean] = useState(false);
    return (
        <ThemeContext.Provider value={{ boolean, setBoolean }}>
            {children}
        </ThemeContext.Provider>

    );
};

export { ThemeContextTSX };
