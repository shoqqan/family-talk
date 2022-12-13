import React from 'react';
import style from './Header.module.css'
import img from '../../assets/images/project-logo.png'
import {Avatar, Typography} from "@mui/material";
import {MyAvatar, setLogged} from "../../redux/reducers/profileReducer";
import {useDispatch} from "react-redux";


export const Header = () => {

    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(setLogged(false))
    }
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img className={style.img} src={img} alt="FamilyTalk Logo"/>
                <Typography sx={{fontSize: 25, color: '#FEFEFE', marginTop: '0.6rem'}}>FamilyTalk</Typography>
            </div>
            <div onClick={logOut}><Avatar sx={{marginTop: '0.6rem'}} src={MyAvatar}/></div>
        </header>
    );
};

