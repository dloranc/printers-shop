import { createStore } from 'redux';

const isAuthenticationFromStorage = window.sessionStorage.getItem('is-authenticated');
const isAuthenticatedState = isAuthenticationFromStorage !== null ? isAuthenticationFromStorage : 'false';

const defaultState = {
    isAuthenticated: isAuthenticatedState === 'true' ? true : false,
    role: 'user',
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
