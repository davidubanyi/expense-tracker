export default (state= {}, action) => {
    switch(action.type){
        case 'LOGIN':
            return ({
                ...action.userDetails
            })
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}