import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { ThemeContextTSX } from './hok';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <ThemeContextTSX>
        <RouterProvider router={router}/>,
    </ThemeContextTSX>,
);

