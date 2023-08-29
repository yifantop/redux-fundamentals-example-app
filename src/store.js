import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers';
import { loggerMiddleware, fetchTodosMiddleware}  from './exampleAddons/middleware';
import ThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(applyMiddleware(ThunkMiddleware));

export default createStore(rootReducer, composedEnhancer);