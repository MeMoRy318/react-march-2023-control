import React, { FC, ReactNode } from 'react';

import { ErrorComponent } from '../../UI';

interface IProps {
    children?: ReactNode
}

const NotFoundPage: FC<IProps> = () => {
    return (
        <ErrorComponent message={'404  Not found page'}/>
    );
};

export { NotFoundPage };
