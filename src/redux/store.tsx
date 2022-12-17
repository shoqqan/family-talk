import React from 'react';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profileReducer";
import {newsReducer} from "./reducers/newsReducer";
import thunk from 'redux-thunk'
export type StoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducers>
const rootReducers = combineReducers({
    profilePage: profileReducer,
    newsPage: newsReducer

})
export const store = createStore(rootReducers,applyMiddleware(thunk))