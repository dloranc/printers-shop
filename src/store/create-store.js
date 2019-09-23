import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user from './user/reducer';
import cart from './cart/reducer';

const rootReducer = combineReducers({
  user,
  cart
});

const middleware = process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant').default()] : [];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ...middleware,
      thunk
    )
  ),
);

export default store;
