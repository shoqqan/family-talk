import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import {Sheet} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {Button, FormControlLabel, Link, Radio, RadioGroup, TextField} from "@mui/material";
import {useFormik} from "formik";
import {useTranslation} from "react-i18next";

const Settings = () => {
    const {i18n} = useTranslation();
    const {t} = useTranslation()
    const [selectedLanguage, setSelectedLanguage] = useState('eng')
    const [theme, setTheme] = useState('dark')

    const langs = [
        {id: 1, label: 'kz'},
        {id: 2, label: 'ru'},
        {id: 3, label: 'eng'},
    ];

    const changeLange = (label:string) => {
        if (label !== selectedLanguage) {
            setSelectedLanguage(label);
            i18n.changeLanguage(label);

        }
    }
    useEffect(() => {
        const lang = localStorage.getItem('lang-key')
        if (lang) {
            setSelectedLanguage(lang)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('lang-key', selectedLanguage)
    }, [selectedLanguage]);

    return (
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
                        {t("SETTINGS.TITLE")}
                    </Typography>
                    <Typography level="body2" color={"neutral"}>{t("SETTINGS.LANGUAGE")}</Typography>
                </div>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name={'language'}
                    // value={formik.values.language}
                    onChange={e => changeLange(e.currentTarget.value)}>
                    <FormControlLabel checked={selectedLanguage === 'kz'} value={'kz'}
                                      control={<Radio name={'language'} onClick={() => {
                                          setSelectedLanguage('kz')
                                      }}/>} label="Қазақша"/>
                    <FormControlLabel checked={selectedLanguage === 'eng'} value={'eng'}
                                      control={<Radio name={'language'} onClick={() => {
                                          setSelectedLanguage('eng')
                                      }}/>} label="English"/>
                    <FormControlLabel checked={selectedLanguage === 'ru'} value={'ru'}
                                      control={<Radio name={'language'} onClick={() => {
                                          setSelectedLanguage('ru')
                                      }}/>} label="Русский"/>
                </RadioGroup>

                <Typography level="body2" color={"neutral"}>{t("SETTINGS.THEME")}</Typography>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name={'theme'}
                    // value={formik.values.language}
                    onChange={e => changeLange(e.currentTarget.value)}>
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
    );
};

export default Settings;