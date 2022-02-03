import { SELECT_EVENT } from "./eventAction";


const INITIAL_STATE = {
    selectedEvent: null
}

const selectEventReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_EVENT: {
            const {selectedEvent} = action.payload
            return {
                ...state,
                selectedEvent: selectedEvent
            } 
        } 
        default:
            return state;
    }
}

export default selectEventReducer