import React, {useState} from 'react';
import {Navbaritem} from "./Navbaritem/Navbaritem";
import navstyle from './Navbar.module.css'
import {Link, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Dns, People, PermMedia, Public, Settings} from "@mui/icons-material";
import {NavLink, useNavigate} from "react-router-dom";
import {ROUTES} from "../../helpers/roates";
import {useTranslation} from "react-i18next";

export const Navbar = () => {
    const navigate = useNavigate()
    const {t} = useTranslation()

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
                    primary={t("NAVBAR.PROFILE")}
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
                    primary={t("NAVBAR.NEWS")}
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
                    primary={t("NAVBAR.SETTINGS")}
                    primaryTypographyProps={{fontSize: 14, fontWeight: 'medium'}}
                />
            </ListItemButton>

        </nav>)
};

