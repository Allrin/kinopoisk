import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import moviesReducer from './movies/reducer';
import themeReducer from './theme/reducer';
import searchReducer from './search/reducer';
import seriesReducer from './series/reducer';
import cartoonReducer from './cartoon/reducer';
import favoritesReducer from './favorites/reducer';
import usersReducer from './users/reducer';

const reducers = combineReducers({
    movies: moviesReducer,
    theme: themeReducer,
    searchMovies: searchReducer,
    series: seriesReducer,
    cartoon: cartoonReducer,
    favoritesMovies: favoritesReducer,
    user: usersReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
