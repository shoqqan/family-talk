import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {LoginPage} from "./components/LoginPage/LoginPage";
import SignUpFamily from "./components/SignUpFamily/SignUpFamily";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {News} from "./components/News/News";
import {Profile} from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import SignUpUser from "./components/SignUpUser/SignUpUser";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path={'sign-in'} element={<LoginPage/>}/>
                <Route path={'sign-up-family'} element={<SignUpFamily/>}/>
                <Route path={'sign-up-user'} element={<SignUpUser/>}/>
                <Route path={'home'} element={<App/>}>
                    <Route path={'news'} element={<News/>}/>
                    <Route path={'profile'} element={<Profile/>}/>
                    <Route path={'settings'} element={<Settings/>}/>
                    <Route path={''} element={<Navigate to={'news'}/>}/>
                </Route>
                <Route path={'/'} element={<Navigate to={'home'}/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
