import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <HashRouter>
            <Suspense fallback={<div>loading……</div>}>
                <App />
            </Suspense>    
        </HashRouter>
    </StrictMode>
) 