import React from 'react';
import ReactDOM from 'react-dom/client';
import ReduxContext from './store/ReduxContext'
import App from './App';
import store from './store/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ReduxContext.Provider value={store}>
        <App />
    </ReduxContext.Provider>
);

