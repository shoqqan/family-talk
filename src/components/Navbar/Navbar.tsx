import React, {useState} from 'react';
import {Navbaritem} from "./Navbaritem/Navbaritem";
import navstyle from './Navbar.module.css'
import {Link, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Dns, People, PermMedia, Public, Settings} from "@mui/icons-material";
import {NavLink, useNavigate} from "react-router-dom";
import {ROUTES} from "../../helpers/roates";

export const Navbar = () => {
    const navigate = useNavigate()
    // const data = [
    //     {icon: <People/>, label: 'Authentication'},
    //     {icon: <Dns/>, label: 'Database'},
    //     {icon: <PermMedia/>, label: 'Storage'},
    //     {icon: <Public/>, label: 'Hosting'},]
    return (
        <nav style={{gridArea: 'n', minHeight: '93vh'}}>
            <ListItemButton
                key={'Profile'}
                sx={{py: 0, minHeight: 100, color: 'rgba(255,255,255,.8)'}}
                onClick={() => {
                    navigate(ROUTES.PROFILE)
                }}
            >
                <ListItemIcon sx={{color: 'inherit'}}>

                    {<People/>}

                </ListItemIcon>
                <ListItemText
                    primary={'Profile'}
                    primaryTypographyProps={{fontSize: 14, fontWeight: 'medium'}}
                />
            </ListItemButton>
            <ListItemButton
                onClick={() => {
                    navigate(ROUTES.NEWS)
                }}
                key={'News'}
                sx={{py: 0, minHeight: 100, color: 'rgba(255,255,255,.8)'}}>
                <ListItemIcon sx={{color: 'inherit'}}>
                    {<Public/>}
                </ListItemIcon>
                <ListItemText
                    primary={'News'}
                    primaryTypographyProps={{fontSize: 14, fontWeight: 'medium'}}
                />
            </ListItemButton>
            <ListItemButton

                key={'Settings'}
                sx={{py: 0, minHeight: 100, color: 'rgba(255,255,255,.8)'}}
            >
                <ListItemIcon sx={{color: 'inherit'}}>
                    {<Settings/>}
                </ListItemIcon>
                <ListItemText
                    onClick={() => {
                        navigate(ROUTES.SETTINGS)
                    }}
                    primary={'Settings'}
                    primaryTypographyProps={{fontSize: 14, fontWeight: 'medium'}}
                />
            </ListItemButton>

        </nav>)
};

