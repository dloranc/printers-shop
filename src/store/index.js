import { createStore } from 'redux';

const fromSessionStorage = window.sessionStorage.getItem('is-authenticated');
const isAuthenticatedState = fromSessionStorage !== null ? fromSessionStorage : 'false';

const defaultState = isAuthenticatedState === 'true' ? true : false;

function isAuthenticatedReducer(state = defaultState, action) {
    switch (action.type) {
        case 'AUTHENTICATE':
            return true
        case 'LOGOUT':
            return false
        default:
            return state
    }
}

let store = createStore(isAuthenticatedReducer);

export { store };
