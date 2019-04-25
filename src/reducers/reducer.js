let initialState = {
    username: '',
    userprofile: {},
    users: [],
    repos: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        
        case 'GET_USERS':        
        return {
            ...state,
            users: action.users
        }
        default:
            return state;
    }
}

export default reducer;