import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {LoginPage} from "../components/LoginPage/LoginPage";


export const AuthRedirect: React.FC<{children: JSX.Element}> = ({children}) => {
    const isLogged = useSelector<AppStateType, boolean>(state =>  state.profilePage.isLogged)
    const token = localStorage.getItem('token');
    if (!isLogged && !token) {
        return <LoginPage/>
        // replaceWithReload(ROUTES.SIGN_IN)
    }
    return children;
}