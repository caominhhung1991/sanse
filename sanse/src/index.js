import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

// Component App
import App from './App';

// styles - css
import './static/sass/main.scss';
import './../node_modules/font-awesome/css/font-awesome.css';
import sanseReducer from './containers/sanse/store/sanse.reducer';

const rootReducer = combineReducers({
    sanse: sanseReducer,
});

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();