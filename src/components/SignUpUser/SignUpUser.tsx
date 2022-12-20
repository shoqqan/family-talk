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
import {FileUploadInput} from "../FileUploadInput/FileUploadInput";
import {useLocation} from "react-router-dom";
import {authMeTC} from "../../redux/reducers/profileReducer";

export const SignUpUser = () => {
    const location = useLocation();
    const [base64, setBase64] = useState<string>();
    const dispatch = useDispatch<any>();
    const familySpaceId = useSelector<AppStateType, number>(state => state.profilePage.familySpace.id);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token)
            dispatch(authMeTC())
    }, [])

    if (!familySpaceId && !token) {
        replaceWithReload(ROUTES.SIGN_UP_FAMILY)
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            login: '',
            password: '',
            secondPassword: '',
        },
        onSubmit: ({name, login, password}) => {
            axios.post('https://family-talk.up.railway.app/auth/registration', {
                login,
                password,
                name,
                picture: base64,
                family_space_id: familySpaceId
            }).then(() => {
                redirectToLogin();
            })
        },
    });

    const redirectToLogin = () => {
        replaceWithReload(ROUTES.SIGN_IN);
    }

    return (
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
                    <Typography level="body2" color={"neutral"}>Sign up user!</Typography>
                </div>
                <TextField
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    // html input attribute
                    name="name"
                    type="text"
                    placeholder="f.e. 'Shoqan Tataev'"
                    // pass down to FormLabel as children
                    label="Enter your name"
                />
                <TextField
                    value={formik.values.login}
                    onChange={formik.handleChange}
                    // html input attribute
                    name="login"
                    type="text"
                    placeholder="f.e. 'shoqqan'"
                    // pass down to FormLabel as children
                    label="Enter your login"
                />

                <TextField
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    name="password"
                    type="password"
                    placeholder="password"
                    label="Password"
                />
                <TextField
                    value={formik.values.secondPassword}
                    onChange={formik.handleChange}
                    variant={'outlined'}
                    name="secondPassword"
                    type="password"
                    placeholder="password"
                    label="Enter your password again"
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
                                replaceWithReload(ROUTES.HOME)
                            }}>Return to profile</Button>}
                            fontSize="sm"
                            sx={{alignSelf: 'center'}}>
                        </Typography>
                }
            </Sheet>
        </form>
    );
};

export default SignUpUser;