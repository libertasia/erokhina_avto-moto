import React from 'react';
import ReactDOM from 'react-dom';
import browserHistory from "./browser-history";
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';
import {Router as BrowserRouter} from 'react-router-dom';
import App from './components/app/app';
// import rootReducer from './store/root-reducer';
// import {createAPI} from './services/api';
// import {fetchExchangeRate} from './store/api-actions';


// const api = createAPI();

// const store = createStore(
//     rootReducer,
//     // composeWithDevTools(
//     //     applyMiddleware(thunk.withExtraArgument(api))
//     // )
// );

// store.dispatch(fetchExchangeRate());

ReactDOM.render(
    // <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <App />
    </BrowserRouter>,
    // </Provider>,
    document.getElementById(`root`)
);
