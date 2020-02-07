import { AUTHENTICATE, LOGOUT, SET_ROLE } from './constants';

const isAuthenticatedFromStorage = JSON.parse(
  window.sessionStorage.getItem('is-authenticated')
);
const isAuthenticatedState = isAuthenticatedFromStorage !== null ?
  isAuthenticatedFromStorage : false;

const roleFromStorage = window.sessionStorage.getItem('role');
const roleState = roleFromStorage !== null ? roleFromStorage : 'visitor';

const defaultState = {
  isAuthenticated: isAuthenticatedState,
  role: roleState
};

function user(state = defaultState, action) {
    switch (action.type) {
        case AUTHENTICATE:
            return Object.assign({}, state, { isAuthenticated: true });
        case LOGOUT:
            window.sessionStorage.setItem('is-authenticated', 'false');
            window.sessionStorage.setItem('role', 'visitor');
            return Object.assign({}, state, { role: 'visitor', isAuthenticated: false });
        case SET_ROLE:
            return Object.assign({}, state, { role: action.role });
        default:
            return state;
    }
}

export default user;
