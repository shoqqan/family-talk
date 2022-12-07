import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Navbaritem.module.css'

type NavbaritemPropsType = {
    title:string
    href: string
    style: string
}

export const Navbaritem = (props: NavbaritemPropsType) => {
    return (
        <div onClick={()=>{}} className={style.item}><NavLink className={navData=>navData.isActive?style.active:style.item} to={props.href}>{props.title}</NavLink></div>
    );
};

