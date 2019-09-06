import { createStore, combineReducers } from 'redux';
import user from './user/reducer';

const rootReducer = combineReducers({
  user,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
