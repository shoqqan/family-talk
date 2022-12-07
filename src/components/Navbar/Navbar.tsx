import React from 'react';
import {Navbaritem} from "./Navbaritem/Navbaritem";
import navstyle from './Navbar.module.css'

export const Navbar = () => {
    return(<nav className={navstyle.nav}>
        <Navbaritem title={'Profile'} href={'/profile'} style={''}/>
        <Navbaritem title={'News'} href={'/news'} style={''}/>
        <Navbaritem title={'Settings'} href={'/settings'} style={''}/>
        <Navbaritem title={'Login'} href={'/login'} style={''}/>
    </nav>)
};

