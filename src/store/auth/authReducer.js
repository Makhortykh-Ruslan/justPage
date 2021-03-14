import {ADD_AUTH} from "./constants";

const initialState = {
    user: [],
    flag: false
};

export const authReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ADD_AUTH :
            return {...state, user: payload, flag: true}

            default : return state
    }
}