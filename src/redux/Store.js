import reducer from "./Reducer";
import {combineReducers} from "redux";
import { configureStore } from '@reduxjs/toolkit'


const rootReducer = combineReducers({reducer})
const store = configureStore({reducer:rootReducer})

export default store;