import React from 'react';
import {Button, Link, TextField} from "@mui/material";
import {Sheet} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {useFormik} from "formik";
import axios from "axios";
import {MyAvatar, setLogged} from "../../redux/reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {replaceWithReload} from "../../helpers/replaceWithReload";

export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibG9naW4iOiJrc2RhZGEiLCJpYXQiOjE2NzA1MzQ3NzksImV4cCI6MTY3MDYyMTE3OX0.nnj1Hm9S3yB-JPMDIVO4lhSGE-fwPX4Z4RdKV6qTeG0"
const validate = (values: any) => {
    const errors: any = {};
    if (!values.name) {
        errors.name = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid name';
    }

    if (!values.login) {
        errors.login = 'Required';
    } else if (values.login.length > 15) {
        errors.login = 'Must be 15 characters or less';
    }


    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password !== values.secondPassword) {
        errors.password = 'Password does not match'
    }
    if (!values.secondPassword) {
        errors.secondPassword = 'Password does not match'
    } else if (values.password !== values.secondPassword) {
        errors.secondPassword = 'Password does not match'
    }
    return errors;
};
export const SignUpUser = () => {
    const dispatch = useDispatch();
    const familySpaceId = useSelector<AppStateType, number>(state => state.profilePage.familySpace.id);

    if (!familySpaceId) {
        replaceWithReload('sign-up-family')
    }


    const formik = useFormik({
        initialValues: {
            name: '',
            login: '',
            password: '',
            secondPassword: '',

        },
        validate,
        onSubmit: ({name, login, password}) => {
            alert(JSON.stringify(name, null, 2));
            axios.post('https://family-talk.up.railway.app/auth/registration', {
                login,
                password,
                name,
                picture: MyAvatar,
                family_space_id: familySpaceId
            }).then((res) => {
                dispatch(setLogged(true))
            })
        },

    });
    const get = () => {
        axios.post('https://family-talk.up.railway.app/auth/registration', {
            login: formik.values.login,
            password: formik.values.password,
            name: formik.values.name,
            family_space_id: familySpaceId
        }).then((res) => {
            dispatch(setLogged(true))
            replaceWithReload('home');
            localStorage.setItem('token', res.data.token)
        })
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
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
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
                    error={formik.touched.login && Boolean(formik.errors.login)}
                    helperText={formik.touched.login && formik.errors.login}
                />

                {/*<TextField*/}
                {/*    // html input attribute*/}
                {/*    value={formik.values.email}*/}
                {/*    onChange={formik.handleChange}*/}
                {/*    name="email"*/}
                {/*    type="email"*/}
                {/*    placeholder="johndoe@email.com"*/}
                {/*    // pass down to FormLabel as children*/}
                {/*    label="Email"*/}
                {/*    error={formik.touched.email && Boolean(formik.errors.email)}*/}
                {/*    helperText={formik.touched.email && formik.errors.email}*/}
                {/*/>*/}
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

                {/*<TextField*/}
                {/*    id="input-with-icon-textfield"*/}
                {/*    label="Family Avatar *"*/}
                {/*    variant="outlined"*/}

                {/*    sx={{*/}
                {/*        ".MuiOutlinedInput-root": {*/}
                {/*            paddingTop: "1rem",*/}
                {/*            flexDirection: "column"*/}
                {/*        },*/}
                {/*        img: {*/}
                {/*            paddingRight: "1rem"*/}
                {/*        }*/}
                {/*    }}*/}
                {/*    InputProps={{*/}
                {/*        startAdornment: <img src="https://via.placeholder.com/180x150/200"/>*/}
                {/*    }}*/}
                {/*    placeholder="Enter image caption..."*/}
                {/*/>*/}
                {/*<Button type={"submit"} disabled={false} sx={{mt: 1 /* margin top *!/}>*/}
                {/*    /!*<Link href="/home" sx={{textDecoration: 'none'}}>Sign up user!</Link>*!/*/}
                {/*    sign up user*/}
                {/*</Button>*/}
                {/*<button type={'submit'} onClick={get}>lestgo</button>*/}
                <Button type={'submit'} onClick={get}>Sign up user!</Button>
                <Typography
                    endDecorator={<Link href="/sign-in">Sign in</Link>}
                    fontSize="sm"
                    sx={{alignSelf: 'center'}}
                >
                    Already have an account?

                </Typography>

            </Sheet>
        </form>
    );
};

export default SignUpUser;