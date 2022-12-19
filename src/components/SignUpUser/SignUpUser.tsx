import React from 'react';
import {Button, Link, TextField} from "@mui/material";
import {Sheet} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {useFormik} from "formik";
import axios from "axios";
import {MyAvatar, setLoggedActionCreator} from "../../redux/reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {replaceWithReload} from "../../helpers/replaceWithReload";
import {ROUTES} from "../../helpers/roates";

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
        replaceWithReload(ROUTES.SIGN_UP_FAMILY)
    }


    const formik = useFormik({
        initialValues: {
            name: '',
            login: '',
            password: '',
            secondPassword: '',
            picture:''
        },
        validate,
        onSubmit: ({name, login, password,picture}) => {
            alert(JSON.stringify(name, null, 2));
            axios.post('https://family-talk.up.railway.app/auth/registration', {
                login,
                password,
                name,
                picture,
                family_space_id: familySpaceId
            }).then((res) => {
            })
        },

    });
    const get = () => {
        axios.post('https://family-talk.up.railway.app/auth/registration', {
            login: formik.values.login,
            password: formik.values.password,
            name: formik.values.name,
            picture: formik.values.picture,
            family_space_id: familySpaceId
        }).then(() => {
            replaceWithReload(ROUTES.SIGN_IN);
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
                <TextField
                    value={formik.values.picture}
                    onChange={formik.handleChange}
                    id="input-with-icon-textfield"
                    label="Your Avatar"
                    variant="outlined"
                    name='picture'
                    sx={{
                        ".MuiOutlinedInput-root": {
                            paddingTop: "1rem",
                            flexDirection: "column"
                        },
                        img: {
                            paddingRight: "1rem"
                        }
                    }}
                    InputProps={{
                        startAdornment: <img src="https://via.placeholder.com/180x150/200"/>
                    }}
                    placeholder="Enter image caption..."
                />
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