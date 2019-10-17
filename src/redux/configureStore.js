import {createStore, applyMiddleware,compose} from "redux";
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configure(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    )
}