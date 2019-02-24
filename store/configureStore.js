import Redux, { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import moviesReducer from './reducers/movies';
import loaderReducer from './reducers/loader';

const rootReducer = combineReducers({
  // places: moviesReducer,
  loader: loaderReducer 
});

let composeEnhancers = compose;

if(__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore; 