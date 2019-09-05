import * as constants from './constants';

const authenticate = () => {
    return {
        type: constants.AUTHENTICATE,
    }
}

const logout = () => {
    return {
        type: constants.LOGOUT,
    }
}

const setRole = (role) => {
    return {
        type: constants.SET_ROLE,
        role,
    }
}

export {
    authenticate,
    logout,
    setRole,
}
