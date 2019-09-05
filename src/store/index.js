import { createStore } from 'redux';

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
        case 'AUTHENTICATE':
            return Object.assign({}, state, { isAuthenticated: true });
        case 'LOGOUT':
            return Object.assign({}, state, { isAuthenticated: false });
        case 'SET_ROLE':
            return Object.assign({}, state, { role: action.role });
        default:
            return state;
    }
}

let store = createStore(userReducer);

const setRole = (role) => {
    return {
        type: 'SET_ROLE',
        role,
    }
}

export { store, setRole };
