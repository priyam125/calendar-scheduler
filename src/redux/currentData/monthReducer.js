import { NEXT_MONTH, PREV_MONTH, SET_CURRENT_DAY } from "./monthAction";
import dayjs from "dayjs";

const INITIAL_STATE = {
    currentMonthIdx: dayjs().month(),
    currentDay: dayjs()
}


const monthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEXT_MONTH: {
            return {
                ...state,
                currentMonthIdx: state.currentMonthIdx + 1
            } 
        }
        case PREV_MONTH: {
            return {
                ...state,
                currentMonthIdx: state.currentMonthIdx - 1
            } 
        }   
        case SET_CURRENT_DAY: {
            const {selectedDay} = action.payload
            return {
                ...state,
                currentDay: selectedDay
            } 
        }   
        default:
            return state;
    }
}

export default monthReducer