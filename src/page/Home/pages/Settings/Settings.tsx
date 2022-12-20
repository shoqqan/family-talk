import React, {ChangeEvent, useState} from 'react';
import {Sheet} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {Button, FormControlLabel, Link, Radio, RadioGroup, TextField} from "@mui/material";
import {useFormik} from "formik";

const Settings = () => {
    const [lang, setLang] = useState('english')
    const [theme, setTheme] = useState('dark')
    const formik = useFormik({
        initialValues: {
            language: lang,
            theme
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const handleRadioLanguageButtons = (e: ChangeEvent<HTMLInputElement>) => {
        setLang(e.currentTarget.value)
        formik.values.language = e.currentTarget.value

    }
    const handleRadioThemeButtons = (e: ChangeEvent<HTMLInputElement>) => {
        setTheme(e.currentTarget.value)
        formik.values.theme = e.currentTarget.value

    }
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
                color: "#FEFEFE"
            }}>
                <div>
                    <Typography sx={{marginBottom: 2, fontWeight: 'bold', fontSize: 25}} level="h4" component="h1">
                        Settings
                    </Typography>
                    <Typography level="body2" color={"neutral"}>Language</Typography>
                </div>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name={'language'}
                    value={formik.values.language}
                    onChange={e => handleRadioLanguageButtons(e)}>
                    <FormControlLabel checked={lang === 'kazakh'} value={'kazakh'}
                                      control={<Radio name={'language'} onClick={() => {
                                          setLang('kazakh')
                                      }}/>} label="Қазақша"/>
                    <FormControlLabel checked={lang === 'english'} value={'english'}
                                      control={<Radio name={'language'} onClick={() => {
                                          setLang('english')
                                      }}/>} label="English"/>
                    <FormControlLabel checked={lang === 'russian'} value={'russian'}
                                      control={<Radio name={'language'} onClick={() => {
                                          setLang('russian')
                                      }}/>} label="Русский"/>
                </RadioGroup>

                <Typography level="body2" color={"neutral"}>Theme</Typography>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name={'theme'}
                    value={formik.values.language}
                    onChange={e => handleRadioThemeButtons(e)}>
                    <FormControlLabel checked={theme === 'white'} value={'white'}
                                      control={<Radio name={'theme'} onClick={() => {
                                          setTheme('white')
                                      }}/>} label="White"/>
                    <FormControlLabel checked={theme === 'dark'} value={'dark'}
                                      control={<Radio name={'theme'} onClick={() => {
                                          setTheme('dark')
                                      }}/>} label="Dark"/>
                </RadioGroup>
                <Button type={'submit'}>Apply</Button>


            </Sheet>
        </form>
    );
};

export default Settings;