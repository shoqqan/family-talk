import React from 'react';
import {Button, Link, TextField} from "@mui/material";
import {Sheet} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {useFormik} from "formik";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setFamilySpace} from "../../redux/reducers/profileReducer";
import {useNavigate} from "react-router-dom";
import {AppStateType} from "../../redux/store";
import {replaceWithReload} from "../../helpers/replaceWithReload";

const validate = (values: any) => {
    const errors: any = {};
    if (!values.familyName) {
        errors.familyName = 'Required';
    } else if (values.familyName.length > 15) {
        errors.familyName = 'Must be 15 characters or less';
    }


    return errors;
};
const SignUpFamily = () => {
    const isLogged = useSelector<AppStateType, boolean>(state =>  state.profilePage.isLogged)

    if (isLogged) {
        replaceWithReload('home')
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            familyName: '',
            login: '',
            password: '',
            secondPassword: '',
            description: '',
            familyImage: ''
        }, validate,
        onSubmit: ({login, familyImage, familyName, password}) => {
            axios.post('https://family-talk.up.railway.app/family-space/create', {
                login,
                title: familyName,
                password,
                picture: familyImage
            }).then((res) => {
                dispatch(setFamilySpace(res.data))
                navigate('/sign-up-user')
            })
        },
    });



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
                        Registration FamilyTalk!
                    </Typography>
                    <Typography level="body2" color={"neutral"}>Sign up your family to
                        continue.</Typography>
                </div>
                <TextField
                    value={formik.values.familyName}
                    onChange={formik.handleChange}
                    name="familyName"
                    type="text"
                    placeholder="f.e 'Tatayev's name"
                    label="Family name"
                    error={formik.touched.familyName && Boolean(formik.errors.familyName)}
                    helperText={formik.touched.familyName && formik.errors.familyName}
                />

                <TextField
                    value={formik.values.login}
                    onChange={formik.handleChange}
                    name="login"
                    type="text"
                    placeholder="login"
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
                    id="input-with-icon-textfield"
                    label="Family Avatar *"
                    variant="outlined"

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
                <Button type={"submit"} disabled={false} sx={{mt: 1 /* margin top */}}>
                    Sign
                </Button>
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

export default SignUpFamily;