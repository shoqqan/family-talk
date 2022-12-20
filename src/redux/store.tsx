import React from 'react';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./reducers/profileReducer";
import {newsReducer} from "./reducers/newsReducer";
import thunk from 'redux-thunk'
import {appReducer} from "./reducers/appReducer";


export type AppStateType = ReturnType<typeof rootReducers>

const rootReducers = combineReducers({
    profilePage: profileReducer,
    newsPage: newsReducer,
    AppPage: appReducer

})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))