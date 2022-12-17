import React, {useEffect} from 'react';
import {Header} from "../../components/Header/Header";
import {Navbar} from "../../components/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import s from './Home.module.css';
import axios from "axios";
import {authMeTC, setLogged, setUser} from "../../redux/reducers/profileReducer";
import {useDispatch} from "react-redux";
import {replaceWithReload} from "../../helpers/replaceWithReload";
import {ROUTES} from "../../helpers/roates";

export const Home = () => {
    const dispatch = useDispatch<any>()
    useEffect(() => {
        dispatch(authMeTC())
    }, [])
    return (
        <div className={s.home}>
            <Header/>
            <Navbar/>
            <div className={s.content}>
                <Outlet/>
            </div>
        </div>
    );
};

