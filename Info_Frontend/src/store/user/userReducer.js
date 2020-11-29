const userReducer = (state = null,action) =>{
    switch (action.type) {
        case "SAVEUSER":
            let newUser = {...action.info}
            return newUser
        case "GETUSER":
            return state
        case "LOGOUT":
            return null
        default:
            return state
    }
}

export default userReducer