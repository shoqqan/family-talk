import * as React from 'react';
import Typography from '@mui/joy/Typography';
import {Sheet} from "@mui/joy";
import {Button, Link, TextField} from "@mui/material";
import {ROUTES} from "../../helpers/roates";
import {replaceWithReload} from "../../helpers/replaceWithReload";
import {useFormik} from "formik";
import axios from "axios";
import {setLoggedActionCreator} from "../../redux/reducers/profileReducer";
import {useDispatch} from "react-redux";
import s from './LoginPage.module.css';

const validate = ({login, password}: any) => {
    const errors: any = {};

    if (!login) {
        errors.login = 'Required';
    }

    if (!password) {
        errors.password = 'Required';
    }

    return errors;
};

export function LoginPage() {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validate,
        onSubmit: ({login, password}) => {
            // console.log(login, password)
            axios.post('https://family-talk.up.railway.app/auth/login', {
                login,
                password,
            }).then((res) => {
                localStorage.setItem('token', res.data.token)
                dispatch(setLoggedActionCreator(true))
                replaceWithReload('home')
            })
        },
    });

    return (
        <div className={s.wrapper}>
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
                                    sx={{color: '##66667C'}}>Sign in to
                            continue.</Typography>
                    </div>

                    <TextField
                        value={formik.values.login}
                        onChange={formik.handleChange}
                        name="login"
                        type="text"
                        placeholder="shoqqan"
                        label="Login"
                        error={formik.touched.login && Boolean(formik.errors.login)}
                        helperText={formik.touched.login && formik.errors.login}
                    />
                    <TextField
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        name="password"
                        type="password"
                        placeholder="password"
                        label="Password"
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button disabled={formik.touched && !formik.isValid} type={'submit'} sx={{mt: 1}}>
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
        </div>
    )
}