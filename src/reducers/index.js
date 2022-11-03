import todoReducers from "./todoReducers";
// import reducerDelete from "./reducerDelete";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todoReducers
    // reducerDelete
})

export default rootReducer;