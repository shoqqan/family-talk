import React, {useEffect, useState} from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {LoginPage} from "./page/LoginPage/LoginPage";
import SignUpFamily from "./page/SignUpFamily/SignUpFamily";
import SignUpUser from "./page/SignUpUser/SignUpUser";
import {Home} from "./page/Home/Home";
import {News} from "./page/Home/pages/News/News";
import {Profile} from "./page/Home/pages/Profile/Profile";
import Settings from "./page/Home/pages/Settings/Settings";
import {AuthRedirect} from "./hoc/AuthRedirect";
import {ROUTES} from "./helpers/roates";
import './assets/i18n/i18n'
import {useTranslation} from "react-i18next";

function App() {
    const {i18n, t} = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('eng')

    const changeLange = (label: string) => {
        if (label !== selectedLanguage) {
            setSelectedLanguage(label);
            i18n.changeLanguage(label);
        }
    }

    useEffect(() => {
        const lang = localStorage.getItem('lang-key')
        if (lang) {
            setSelectedLanguage(lang)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('lang-key', selectedLanguage)
        changeLange(selectedLanguage)
    }, [selectedLanguage]);

    return (
        <div className='app-wrapper'>
            <Routes>
                <Route path={ROUTES.SIGN_IN} element={<LoginPage t={t}/>}/>
                <Route path={ROUTES.SIGN_UP_FAMILY} element={<SignUpFamily/>}/>
                <Route path={ROUTES.SIGN_UP_USER} element={<SignUpUser/>}/>
                <Route path={ROUTES.HOME} element={<AuthRedirect><Home/></AuthRedirect>}>
                    <Route path={ROUTES.NEWS} element={<News/>}/>
                    <Route path={ROUTES.PROFILE} element={<Profile/>}/>
                    <Route path={ROUTES.SETTINGS} element={<Settings
                        t={t}
                        selectedLanguage={selectedLanguage}
                        setSelectedLanguage={setSelectedLanguage}
                        changeLange={changeLange}
                    />
                    }/>
                    <Route path={''} element={<Navigate to={ROUTES.PROFILE}/>}/>
                </Route>
                <Route path={'/'} element={<Navigate to={ROUTES.SIGN_IN}/>}/>
            </Routes>
        </div>
    );
}

export default App;
