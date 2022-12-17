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
import {ROUTES} from "./helpers/roates";
import SignUpFamilyMember from "./components/AddFamilyMember/AddFamilyMember";
import axios from "axios";
import {useDispatch} from "react-redux";
import {authMeTC} from "./redux/reducers/profileReducer";


//create enums or constants for routes; // => helpers/routes.ts DONE
//cleaning everywhere no logs, no hardcode DONE
//get data of family and user from back
//change header photo to icon of logout
//
function App() {
    return (
        <Routes>
            <Route path={ROUTES.SIGN_IN} element={<LoginPage/>}/>
            <Route path={ROUTES.SIGN_UP_FAMILY} element={<SignUpFamily/>}/>
            <Route path={ROUTES.SIGN_UP_USER} element={<SignUpUser/>}/>
            <Route path={ROUTES.SIGN_UP_FAMILY_MEMBER} element={<SignUpFamilyMember/>}/>
            <Route path={ROUTES.HOME} element={<AuthRedirect><Home/></AuthRedirect>}>
                <Route path={ROUTES.NEWS} element={<News/>}/>
                <Route path={ROUTES.PROFILE} element={<Profile/>}/>
                <Route path={ROUTES.SETTINGS} element={<Settings/>}/>
                <Route path={''} element={<Navigate to={ROUTES.NEWS}/>}/>
            </Route>
            <Route path={'/'} element={<Navigate to={ROUTES.HOME}/>}/>
        </Routes>
    );
}

export default App;
