import React, {ChangeEvent, useState} from 'react';
import {Button, Link, TextField} from "@mui/material";
import {Sheet} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {useFormik} from "formik";

const validate = (values: any) => {
    const errors: any = {};
    if (!values.familyName) {
        errors.familyName = 'Required';
    } else if (values.familyName.length > 15) {
        errors.familyName = 'Must be 15 characters or less';
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
const SignUpUser = () => {
    const formik = useFormik({
        initialValues: {
            familyName: '',
            email: '',
            password: '',
            secondPassword: '',
            familyImage: ''
        }, validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
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
                    // html input attribute
                    name="familyName"
                    type="text"
                    placeholder="f.e 'Tatayev's name"
                    // pass down to FormLabel as children
                    label="Family name"
                    error={formik.touched.familyName && Boolean(formik.errors.familyName)}
                    helperText={formik.touched.familyName && formik.errors.familyName}
                />
                <TextField
                    // html input attribute
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                    type="email"
                    placeholder="johndoe@email.com"
                    // pass down to FormLabel as children
                    label="Email"
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
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
                    Sign up family!
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

export default SignUpUser;