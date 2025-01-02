import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import sessionReducer from './session';
import spotsReducer from './spots';
import testReducer from './testReducer';

const rootReducer = combineReducers({
    test: testReducer,
    session: sessionReducer,
    spots: spotsReducer
});

let enhancer;
if(import.meta.env.NODE === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
