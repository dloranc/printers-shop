import { createStore, combineReducers } from 'redux';
import user from './user/reducer';
import cart from './cart/reducer';

const rootReducer = combineReducers({
  user,
  cart,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
