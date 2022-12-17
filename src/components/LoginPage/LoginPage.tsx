import * as React from 'react';
import Typography from '@mui/joy/Typography';
import {ModeToggle} from "../ModeToggle/ModeToggle";
import {useEffect, useState} from "react";
import style from './LoginPage.module.css'
import {Sheet} from "@mui/joy";
import {Button, Link, Paper, TextField} from "@mui/material";
import {ROUTES} from "../../helpers/roates";
import {useNavigate} from "react-router-dom";
import {replaceWithReload} from "../../helpers/replaceWithReload";
import {Form, useFormik} from "formik";
import axios from "axios";
import {MyAvatar, setFamilySpaceActionCreator, setLogged, setUser} from "../../redux/reducers/profileReducer";
import {useDispatch} from "react-redux";

export function LoginPage() {
    const [theme, setTheme] = useState('light');
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    const formik = useFormik({
        initialValues: {
            login: 'joske',
            password: '321',
            secondPassword: '',

        },
        // validate,
        onSubmit: ({login, password}) => {
            // console.log(login, password)
            axios.post('https://family-talk.up.railway.app/auth/login', {
                login,
                password,
            }).then((res) => {
                // dispatch(setLogged(true))
                localStorage.setItem('token', res.data.token)
                dispatch(setLogged(true))
                replaceWithReload('home')
            })
        },

    });
    return (

        <form onSubmit={formik.handleSubmit}>
            <Sheet variant="outlined" sx={{
                width: 300,
                mx: 'auto',
                my: 4,
                py: 3,
                px: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRadius: 'sm',
                boxShadow: 'md',
            }}>
                <div>
                    <Typography sx={{marginBottom: 2, fontWeight: 'bold', fontSize: 25}} level="h4" component="h1">
                        Welcome to FamilyTalk!
                    </Typography>
                    <Typography level="body2" color={"neutral"}
                                sx={theme === 'light' ? {color: '##66667C'} : {color: '#FEFEFE'}}>Sign in to
                        continue.</Typography>
                </div>

                <TextField
                    value={formik.values.login}
                    onChange={formik.handleChange}
                    name="login"
                    type="text"
                    placeholder="shoqqan"
                    label="Login"
                />
                <TextField
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    name="password"
                    type="password"
                    placeholder="password"
                    label="Password"
                />
                <Button type={'submit'} sx={{mt: 1}}>
                    Log in
                </Button>
                <Typography
                    endDecorator={<Link onClick={() => replaceWithReload(ROUTES.SIGN_UP_FAMILY)}>Sign up your
                        family</Link>}
                    fontSize="sm"
                    sx={{alignSelf: 'center'}}
                >
                    Don't have an account?

                </Typography>
            </Sheet>
        </form>


    )
}