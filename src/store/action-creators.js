const authenticate = () => {
    return {
        type: 'AUTHENTICATE',
    }
}

const logout = () => {
    return {
        type: 'LOGOUT',
    }
}

const setRole = (role) => {
    return {
        type: 'SET_ROLE',
        role,
    }
}

export {
    authenticate,
    logout,
    setRole,
}
