import React, {useEffect} from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {LoginPage} from "./components/LoginPage/LoginPage";
import SignUpFamily from "./components/SignUpFamily/SignUpFamily";
import SignUpUser from "./components/SignUpUser/SignUpUser";
import {Home} from "./page/Home/Home";
import {News} from "./components/News/News";
import {Profile} from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import {AuthRedirect} from "./hoc/AuthRedirect";

export enum ROUTES  {
    SIGN_IN = 'sign-in'
}
//create enums or constants for routes; // => helpers/routes.ts
//cleaning everywhere no logs, no hardcode
//get data of family and user from back
//change header photo to icon of logout
//
function App() {
    useEffect(() => {
        //auth.me(); by token
        //
        //token
        //
    });

    return (
        <Routes>
            <Route path={ROUTES.SIGN_IN} element={<LoginPage/>}/>
            <Route path={'sign-up-family'} element={<SignUpFamily/>}/>
            <Route path={'sign-up-user'} element={<SignUpUser/>}/>
            <Route path={'home'} element={<AuthRedirect><Home/></AuthRedirect>}>
                <Route path={'news'} element={<News/>}/>
                <Route path={'profile'} element={<Profile/>}/>
                <Route path={'settings'} element={<Settings/>}/>
                <Route path={''} element={<Navigate to={'news'}/>}/>
            </Route>
            <Route path={'/'} element={<Navigate to={'home'}/>}/>
        </Routes>
    );
}

export default App;
