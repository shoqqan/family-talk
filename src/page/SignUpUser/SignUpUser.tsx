import React, {useEffect, useState} from 'react';
import {Button, Link, TextField} from "@mui/material";
import {Sheet} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {useFormik} from "formik";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {replaceWithReload} from "../../helpers/replaceWithReload";
import {ROUTES} from "../../helpers/roates";
import {FileUploadInput} from "../../components/FileUploadInput/FileUploadInput";
import {useLocation, useNavigate} from "react-router-dom";
import {authMeTC} from "../../redux/reducers/profileReducer";
import s from '../LoginPage/LoginPage.module.css';
import {universalValidator} from "../SignUpFamily/SignUpFamily";


export const SignUpUser = () => {
    const location = useLocation();
    const [base64, setBase64] = useState<string>();
    const dispatch = useDispatch<any>();
    const familySpaceId = useSelector<AppStateType, number>(state => state.profilePage.familySpace.id);
    const family_space_id = useSelector<AppStateType, number>(state => state.profilePage.user.family_space_id);
    const token = localStorage.getItem('token');
    const navigate = useNavigate()
    useEffect(() => {
        if (token)
            dispatch(authMeTC())
    }, [])

    if (!(familySpaceId || family_space_id) && !token) {
        navigate('/sign-up-family')
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            login: '',
            password: '',
            secondPassword: '',
        },
        validate: universalValidator(),
        onSubmit: ({name, login, password}) => {
            axios.post('https://family-talk-back-production.up.railway.app/auth/registration', {
                login,
                password,
                name,
                picture: base64,
                family_space_id: location.state?.from === 'login' ? familySpaceId : family_space_id
            }).then(() => {
                location.state?.from === 'login'
                    ? redirectToLogin()
                    : navigate('/home');

            })
        },
    });

    const redirectToLogin = () => {
        navigate('sign-in')
    }

    return (
        <div className={s.wrapper}>
            <form onSubmit={formik.handleSubmit}>
                <Sheet variant="outlined" sx={{
                    width: 300,
                    mx: 'auto', // margin left & right
                    my: 4, // margin top & botom
                    py: 3, // padding top & bottom
                    px: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRadius: 'sm',
                    boxShadow: 'md',
                }}>
                    <div>
                        <Typography sx={{marginBottom: 2, fontWeight: 'bold', fontSize: 25}} level="h4" component="h1">
                            Registration User!
                        </Typography>
                        <Typography color={"neutral"}>Sign up user!</Typography>
                    </div>
                    <TextField
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        name="name"
                        type="text"
                        placeholder="f.e. 'Shoqan Tataev'"
                        label="Enter your name"
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        value={formik.values.login}
                        onChange={formik.handleChange}
                        name="login"
                        type="text"
                        placeholder="f.e. 'shoqqan'"
                        label="Enter your login"
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
                    <TextField
                        value={formik.values.secondPassword}
                        onChange={formik.handleChange}
                        variant={'outlined'}
                        name="secondPassword"
                        type="password"
                        placeholder="password"
                        label="Enter your password again"
                        error={formik.touched.secondPassword && Boolean(formik.errors.secondPassword)}
                        helperText={formik.touched.secondPassword && formik.errors.secondPassword}
                    />
                    <Typography
                        endDecorator={<FileUploadInput setBase64={setBase64}/>}
                        fontSize="sm"
                        sx={{alignSelf: 'center'}}
                    >
                        Family photo:
                    </Typography>
                    <Button type={'submit'}>Sign up user!</Button>
                    {
                        location.state?.from === 'login'
                            ? <Typography
                                endDecorator={<Link onClick={redirectToLogin}>Sign in</Link>}
                                fontSize="sm"
                                sx={{alignSelf: 'center'}}
                            >
                                Already have an account?
                            </Typography>
                            : <Typography
                                endDecorator={<Button onClick={() => {
                                    navigate('home')
                                }}>Return to profile</Button>}
                                fontSize="sm"
                                sx={{alignSelf: 'center'}}>
                            </Typography>
                    }
                </Sheet>
            </form>
        </div>
    );
};

export default SignUpUser;