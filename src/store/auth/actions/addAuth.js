import {ADD_AUTH} from "../constants";

export const addAuth = (payload) =>{
    return {
        type: ADD_AUTH,
        payload
    }
};