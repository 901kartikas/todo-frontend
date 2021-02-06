import { ACTION_TYPES } from "../Actions/todoCategory";
const initialState = {
    list: []
}


export const todoCategory = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }

        default:
            return state
    }
}