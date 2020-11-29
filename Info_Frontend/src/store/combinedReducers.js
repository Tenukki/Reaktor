import userReducer from "./user/userReducer"
import infoReducer from './infos/infoReducer'
import { combineReducers } from "redux"

const allReducers = combineReducers({
    userReducer,
    infoReducer
})

export default allReducers