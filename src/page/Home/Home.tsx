import React, {useEffect} from 'react';
import {Header} from "../../components/Header/Header";
import {Navbar} from "../../components/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import s from './Home.module.css';
import axios from "axios";
import {setLogged, setUser} from "../../redux/reducers/profileReducer";
import {useDispatch} from "react-redux";
import {replaceWithReload} from "../../helpers/replaceWithReload";
import {ROUTES} from "../../helpers/roates";

export const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('https://family-talk.up.railway.app/auth/me', {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}

        }).then((res) => {
            localStorage.setItem('token', res.data.token)
            dispatch(setUser(res.data.user))
            dispatch(setLogged(true))

        }).catch(() => {
            replaceWithReload(ROUTES.SIGN_IN)
        })
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

