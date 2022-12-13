import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {replaceWithReload} from "../helpers/replaceWithReload";


export const AuthRedirect: React.FC<{children: JSX.Element}> = ({children}) => {
    const isLogged = useSelector<AppStateType, boolean>(state =>  state.profilePage.isLogged)
    if (!isLogged) {
        replaceWithReload('sign-in')
    }
    return children;
}