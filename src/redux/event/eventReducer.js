import { addEvent, deleteEvent, updateEvent } from "./event.util";
import { ADD_EVENT, DELETE_EVENT, HIDE_EVENT_MODAL, SHOW_EVENT_MODAL, UPDATE_EVENT,  } from "./eventAction";


const INITIAL_STATE = {
    isVisible: false,
    eventArr: [],
}

const eventReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_EVENT_MODAL: {
            const {isVisible} = action.payload
            return {
                ...state,
                isVisible: isVisible
            } 
        } 
        case HIDE_EVENT_MODAL: {
            const {isVisible} = action.payload
            return {
                ...state,
                isVisible: isVisible
            } 
        } 
        case ADD_EVENT: {
            const {event} = action.payload
            return {
                ...state,
                eventArr: addEvent(state.eventArr, event)
            } 
        } 
        case DELETE_EVENT: {
            const {event} = action.payload
            return {
                ...state,
                eventArr: deleteEvent(state.eventArr, event)
            }
        }
        case UPDATE_EVENT: {
            const {updatedEvent} = action.payload
            return {
                ...state,
                eventArr: updateEvent(state.eventArr, updatedEvent)
            }
        }
        
        default:
            return state;
    }
}

export default eventReducer