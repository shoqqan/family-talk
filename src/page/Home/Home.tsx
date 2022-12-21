import React, {useEffect} from 'react';
import {Header} from "./components/Header/Header";
import {MobileNavbar, Navbar} from "./components/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import s from './Home.module.css';
import {authMeTC} from "../../redux/reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {BallTriangle} from "react-loader-spinner";

export const Home = () => {
    const dispatch = useDispatch<any>()
    const loader = useSelector<AppStateType, boolean>(state => state.AppPage.isLoaded)
    useEffect(() => {
        dispatch(authMeTC())
    }, [])
    return (
        <div className={s.home}>
            <Header/>
            <Navbar/>
            <MobileNavbar/>
            <div className={s.content}>
                <div className={loader ? s.loader : s.displayNone}>
                    <BallTriangle
                        height={100}
                        width={100}
                        radius={5}
                        color="#4fa94d"
                        ariaLabel="ball-triangle-loading"
                        visible={true}
                    />
                </div>
                <Outlet/>
            </div>
        </div>
    );
};

