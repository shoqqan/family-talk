import React, {useState} from 'react';
import {Navbaritem} from "./Navbaritem/Navbaritem";
import navstyle from './Navbar.module.css'
import {Link, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Dns, People, PermMedia, Public} from "@mui/icons-material";
import {NavLink, useNavigate} from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate()
    const data = [
        {icon: <People/>, label: 'Authentication'},
        {icon: <Dns/>, label: 'Database'},
        {icon: <PermMedia/>, label: 'Storage'},
        {icon: <Public/>, label: 'Hosting'},]
    const [navState,setNavState] = useState('people')
    return (
        <nav style={{gridArea:'n', minHeight:'93vh'}}>
            {/*<Navbaritem title={'Profile'} href={'/profile'} style={''}/>*/}
            {/*<Navbaritem title={'Profile'} href={'/home/profile'} style={''}/>*/}
            {/*<Navbaritem title={'News'} href={'/home/news'} style={''}/>*/}
            {/*<Navbaritem title={'Settings'} href={'/home/settings'} style={''}/>*/}
            {/*<Navbaritem title={'Login'} href={'/login'} style={''}/>*/}

            <ListItemButton
                key={'Profile'}
                sx={{py: 0, minHeight: 100, color: 'rgba(255,255,255,.8)'}}
                onClick={() => {
                    setNavState('profile')
                    navigate('profile')
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
                    navigate('news')
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
                    {<People/>}
                </ListItemIcon>
                <ListItemText
                    onClick={() => {
                        navigate('settings')
                    }}
                    primary={'Settings'}
                    primaryTypographyProps={{fontSize: 14, fontWeight: 'medium'}}
                />
            </ListItemButton>

        </nav>)
};

