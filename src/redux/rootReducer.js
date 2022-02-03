import { combineReducers } from "redux";

import monthReducer from "./currentData/monthReducer";
import eventReducer from "./event/eventReducer";
import selectEventReducer from "./event/selectEventReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";  

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['event']
}

const rootReducer =  combineReducers({
    month: monthReducer,
    event: eventReducer,
    selectEvent: selectEventReducer
})

export default persistReducer(persistConfig, rootReducer) 
