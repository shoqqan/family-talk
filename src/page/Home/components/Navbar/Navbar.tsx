import React from 'react';
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {People, Public, Settings} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../../helpers/roates";
import s from './Navbar.module.css'

export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav className={s.nav}>
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

export const MobileNavbar = () => {
    const navigate = useNavigate()
    return (
        <nav className={s.navMobile}>
            <ListItemButton
                key={'Profile'}
                className={s.navMobileItem}
                sx={{py: 0, color: 'rgba(255,255,255,.8)'}}
                onClick={() => {
                    navigate(ROUTES.PROFILE)
                }}
            >
                <ListItemIcon className={s.navMobileItem} sx={{color: 'inherit'}}>
                    {<People/>}
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton
                onClick={() => {
                    navigate(ROUTES.NEWS)
                }}
                key={'News'}
                className={s.navMobileItem}
                sx={{py: 0, color: 'rgba(255,255,255,.8)'}}>
                <ListItemIcon className={s.navMobileItem} sx={{color: 'inherit'}}>
                    {<Public/>}
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton
                key={'Settings'}
                className={s.navMobileItem}
                sx={{py: 0, color: 'rgba(255,255,255,.8)'}}
                onClick={() => {
                    navigate(ROUTES.SETTINGS)
                }}
            >
                <ListItemIcon className={s.navMobileItem} sx={{color: 'inherit'}}>
                    {<Settings/>}
                </ListItemIcon>
            </ListItemButton>

        </nav>)
};
