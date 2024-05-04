import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import pathMatch from './react-router01/src/pathMatch'
// import './react-router01/src/browserHistory'

// const result = pathMatch('/news/:id/:page?', '/news/:id/dslkfjsfk/sldkfjlskdfldsfs')

import { createBrowserHistory } from './react-router01/history/index'

// createBrowserHistory()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);