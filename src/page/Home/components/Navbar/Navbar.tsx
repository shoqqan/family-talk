import React from 'react';
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {People, Public, Settings} from "@mui/icons-material";
import {useLocation, useNavigate} from "react-router-dom";
import {ROUTES} from "../../../../helpers/roates";
import s from './Navbar.module.css'
import {useTranslation} from "react-i18next";

export const Navbar = () => {

    const navigate = useNavigate();
    const {t} = useTranslation();

    const location = useLocation();
    const getIsActive = (key: string) => {
        return location.pathname.includes(key)
    }
    return (
        <nav className={s.nav}>
            <ListItemButton
                className={getIsActive('profile') ? s.active : ""}
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
                    primary={t('NAVBAR.PROFILE')}
                    primaryTypographyProps={{fontSize: 14, fontWeight: 'medium'}}
                />
            </ListItemButton>
            <ListItemButton
                className={getIsActive('news') ? s.active : ""}
                onClick={() => {
                    navigate(ROUTES.NEWS)
                }}
                key={'News'}
                sx={{py: 0, minHeight: 100, color: 'rgba(255,255,255,.8)'}}>
                <ListItemIcon sx={{color: 'inherit'}}>
                    {<Public/>}
                </ListItemIcon>
                <ListItemText
                    primary={t('NAVBAR.NEWS')}
                    primaryTypographyProps={{fontSize: 14, fontWeight: 'medium'}}
                />
            </ListItemButton>
            <ListItemButton
                className={getIsActive('settings') ? s.active : ""}
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
                    primary={t('NAVBAR.SETTINGS')}
                    primaryTypographyProps={{fontSize: 14, fontWeight: 'medium'}}
                />
            </ListItemButton>

        </nav>)
};

export const MobileNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const getIsActive = (key: string) => {
        return location.pathname.includes(key)
    }
    return (
        <nav className={s.navMobile}>
            <ListItemButton
                key={'Profile'}
                className={getIsActive('profile') ? `${s.active} ${s.navMobileItem}` : s.navMobileItem}
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
                className={getIsActive('news') ? `${s.active} ${s.navMobileItem}` : s.navMobileItem}
                sx={{py: 0, color: 'rgba(255,255,255,.8)'}}>
                <ListItemIcon className={s.navMobileItem} sx={{color: 'inherit'}}>
                    {<Public/>}
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton
                key={'Settings'}
                className={getIsActive('settings') ? `${s.active} ${s.navMobileItem}` : s.navMobileItem}
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
