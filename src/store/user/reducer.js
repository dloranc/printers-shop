import { AUTHENTICATE, LOGOUT, SET_ROLE } from './constants';

const isAuthenticatedFromStorage = JSON.parse(window.sessionStorage.getItem('is-authenticated'));
const isAuthenticatedState = isAuthenticatedFromStorage !== null ? isAuthenticatedFromStorage : false;

const roleFromStorage = window.sessionStorage.getItem('role');
const roleState = roleFromStorage !== null ? roleFromStorage : 'user';

const defaultState = {
    isAuthenticated: isAuthenticatedState,
    role: roleState,
}

function user(state = defaultState, action) {
    switch (action.type) {
        case AUTHENTICATE:
            return true;
        case LOGOUT:
            return false;
        case SET_ROLE:
            return action.role;
        default:
            return state;
    }
}

export default user;
