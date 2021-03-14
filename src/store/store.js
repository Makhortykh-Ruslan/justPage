import {createStore, combineReducers} from "redux";
import {authReducer} from "./auth/authReducer";



const rootReducer = combineReducers({
    authIsOpen: authReducer

})

const store = createStore(rootReducer)

export default store