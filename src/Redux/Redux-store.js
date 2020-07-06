import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import Reducer from "./Reducer";
import { reducer as formReducer } from 'redux-form'



let redusers = combineReducers({

    Reducer:Reducer,
    form:formReducer
    }
);

const store = createStore(redusers,applyMiddleware(thunkMiddleware))

window.store = store;

export default store;