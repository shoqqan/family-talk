import React from 'react';
import style from './Header.module.css'
import img from '../talk (1) (1).png'
import {Avatar, Typography} from "@mui/material";
import {MyAvatar} from "../../redux/reducers/profileReducer";
import {useNavigate} from "react-router-dom";


export const Header = () => {
    const host = 'http://localhost:3000'
    const logOut = () => {
        window.location.replace(`${host}/sign-in`)
    }
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img className={style.img} src={img} alt="FamilyTalk Logo"/>
                <Typography sx={{fontSize: 25, color: '#FEFEFE', marginTop:'0.6rem'}}>FamilyTalk</Typography>
            </div>
            <div onClick={logOut}><Avatar sx={{marginTop:'0.6rem'}} src={MyAvatar}/></div>
        </header>
    );
};

