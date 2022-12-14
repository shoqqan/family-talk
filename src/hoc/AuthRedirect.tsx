import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {replaceWithReload} from "../helpers/replaceWithReload";
import {ROUTES} from "../helpers/roates";


export const AuthRedirect: React.FC<{children: JSX.Element}> = ({children}) => {
    const isLogged = useSelector<AppStateType, boolean>(state =>  state.profilePage.isLogged)
    const token = localStorage.getItem('token')
    if (!isLogged && !token) {
        replaceWithReload(ROUTES.SIGN_IN)
    }
    return children;
}