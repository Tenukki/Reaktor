const infoReducer = (state = [],action) =>{
    switch (action.type) {
        case "SAVE":
            let newState = [...action.info]
            return newState
        case "GET":
            return state
        default:
            return state
    }
}

export default infoReducer