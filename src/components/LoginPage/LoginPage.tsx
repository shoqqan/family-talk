import * as React from 'react';
import Typography from '@mui/joy/Typography';
import {ModeToggle} from "../ModeToggle/ModeToggle";
import {useEffect, useState} from "react";
import style from './LoginPage.module.css'
import {Sheet} from "@mui/joy";
import {Button, Link, Paper, TextField} from "@mui/material";

export function LoginPage() {
    const [theme, setTheme] = useState('light');
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

    return (
        <div className={theme === 'light' ? style.light : style.dark}>
            <Button onClick={toggleTheme}>{theme === 'light' ? 'Turn dark' : 'Turn light'}</Button>
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
                        Welcome to FamilyTalk!
                    </Typography>
                    <Typography level="body2" color={"neutral"}
                                sx={theme === 'light' ? {color: '##66667C'} : {color: '#FEFEFE'}}>Sign in to
                        continue.</Typography>
                </div>
                <TextField
                    // html input attribute
                    name="email"
                    type="email"
                    placeholder="johndoe@email.com"
                    // pass down to FormLabel as children
                    label="Email"
                />
                <TextField
                    name="password"
                    type="password"
                    placeholder="password"
                    label="Password"
                />
                <Button sx={{mt: 1 /* margin top */}}>
                    Log in
                </Button>
                <Typography
                    endDecorator={<Link href="/sign-up-family">Sign up your family</Link>}
                    fontSize="sm"
                    sx={{alignSelf: 'center'}}
                >
                    Don't have an account?

                </Typography>
                {/*<Typography*/}
                {/*    endDecorator={<Link href="/sign-up-family">Sign up your family</Link>}*/}
                {/*    fontSize="sm"*/}
                {/*    sx={{alignSelf: 'center'}}*/}
                {/*>*/}
                {/*     or*/}

                {/*</Typography>*/}
            </Sheet>
        </div>
    );
}