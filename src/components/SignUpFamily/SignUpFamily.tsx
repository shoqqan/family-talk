import React, {useState} from 'react';
import {Button, Link, TextField} from "@mui/material";
import {Sheet} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {useFormik} from "formik";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setFamilySpaceActionCreator} from "../../redux/reducers/profileReducer";
import {useNavigate} from "react-router-dom";
import {AppStateType} from "../../redux/store";
import {replaceWithReload} from "../../helpers/replaceWithReload";
import {ROUTES} from "../../helpers/roates";
import {FileUploadInput} from "../FileUploadInput/FileUploadInput";

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
    const [base64, setBase64] = useState<string>();
    const isLogged = useSelector<AppStateType, boolean>(state =>  state.profilePage.isLogged)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (isLogged) {
        replaceWithReload(ROUTES.HOME)
    }

    const formik = useFormik({
        initialValues: {
            familyName: '',
            status: '',
            login: '',
            password: '',
            secondPassword: '',
        }, validate,
        onSubmit: ({familyName, status, login, password}) => {
            axios.post('https://family-talk.up.railway.app/family-space', {
                login,
                title: familyName,
                password,
                status,
                picture: base64
            }).then((res) => {
                dispatch(setFamilySpaceActionCreator(res.data))
                navigate('/sign-up-user', {state: {from: 'login'}})
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
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    name="status"
                    type="text"
                    placeholder="Don't worry be happy!"
                    label="Family status"
                    error={formik.touched.status && Boolean(formik.errors.status)}
                    helperText={formik.touched.status && formik.errors.status}
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

                <Typography
                    endDecorator={<FileUploadInput setBase64={setBase64}/>}
                    fontSize="sm"
                    sx={{alignSelf: 'center'}}
                >
                    Family photo:
                </Typography>
                <Button type={"submit"} disabled={false} sx={{mt: 1 /* margin top */}}>
                    Sign
                </Button>
                <Typography
                    endDecorator={<Link onClick={() => replaceWithReload(ROUTES.SIGN_IN)}>Sign in</Link>}
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