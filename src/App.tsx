import React from 'react';
import './App.css';
import './assets/i18n/i18n'
import {Navigate, Route, Routes} from "react-router-dom";
import {LoginPage} from "./components/LoginPage/LoginPage";
import SignUpFamily from "./components/SignUpFamily/SignUpFamily";
import SignUpUser from "./components/SignUpUser/SignUpUser";
import {Home} from "./page/Home/Home";
import {News} from "./components/News/News";
import {Profile} from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import {AuthRedirect} from "./hoc/AuthRedirect";
import {ROUTES} from "./helpers/roates";
function App() {
    return (
        <div className='app-wrapper'>
            <Routes>
                <Route path={ROUTES.SIGN_IN} element={<LoginPage/>}/>
                <Route path={ROUTES.SIGN_UP_FAMILY} element={<SignUpFamily/>}/>
                <Route path={ROUTES.SIGN_UP_USER} element={<SignUpUser/>}/>
                <Route path={ROUTES.HOME} element={<AuthRedirect><Home/></AuthRedirect>}>
                    <Route path={ROUTES.NEWS} element={<News/>}/>
                    <Route path={ROUTES.PROFILE} element={<Profile/>}/>
                    <Route path={ROUTES.SETTINGS} element={<Settings/>}/>
                    <Route path={''} element={<Navigate to={ROUTES.PROFILE}/>}/>
                </Route>
                <Route path={'/'} element={<Navigate to={ROUTES.HOME}/>}/>
            </Routes>
        </div>
    );
}

export default App;
