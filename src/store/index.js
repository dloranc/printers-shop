import { createStore } from 'redux';
import { AUTHENTICATE, LOGOUT, SET_ROLE } from './constants';

const isAuthenticatedFromStorage = JSON.parse(window.sessionStorage.getItem('is-authenticated'));
const isAuthenticatedState = isAuthenticatedFromStorage !== null ? isAuthenticatedFromStorage : false;

const roleFromStorage = window.sessionStorage.getItem('role');
const roleState = roleFromStorage !== null ? roleFromStorage : 'user';

const defaultState = {
    isAuthenticated: isAuthenticatedState,
    role: roleState,
}

function userReducer(state = defaultState, action) {
    switch (action.type) {
        case AUTHENTICATE:
            return Object.assign({}, state, { isAuthenticated: true });
        case LOGOUT:
            return Object.assign({}, state, { isAuthenticated: false });
        case SET_ROLE:
            return Object.assign({}, state, { role: action.role });
        default:
            return state;
    }
}

let store = createStore(
    userReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
