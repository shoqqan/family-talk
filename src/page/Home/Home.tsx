import React from 'react';
import {Header} from "../../components/Header/Header";
import {Navbar} from "../../components/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import s from './Home.module.css';

export const Home = () => {
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

