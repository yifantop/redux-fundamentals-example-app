import todosReducer from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filtersSlice";
import { combineReducers } from "redux";

export default combineReducers({
    todos: todosReducer,
    filters: filtersReducer
})