import { combineReducers } from 'redux';

import movieReducer from "./movieReducer"
import favoritesReducer from "./favoritesReducer"

const rootReducers = combineReducers ({
    movieReducer: movieReducer,
    favoritesReducer: favoritesReducer
});


export default rootReducers;