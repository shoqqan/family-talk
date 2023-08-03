import React, {useState} from 'react';
import {Sheet} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {Button, FormControlLabel, Radio, RadioGroup} from "@mui/material";

const Settings = ({t, changeLange, selectedLanguage, setSelectedLanguage}: any) => {
    const [value, setValue] = useState(selectedLanguage)
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
                <Typography sx={{marginBottom: 2, fontWeight: 'bold', fontSize: 25}} component="h1">
                    {t("SETTINGS.TITLE")}
                </Typography>
                <Typography color={"neutral"}>{t("SETTINGS.LANGUAGE")}</Typography>
            </div>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                value={value}
                onChange={e => setValue(e.currentTarget.value)}>
                <FormControlLabel checked={value === 'kz'} value={'kz'}
                                  control={<Radio name={'language'}/>} label="Қазақша"/>
                <FormControlLabel checked={value === 'eng'} value={'eng'}
                                  control={<Radio name={'language'}/>} label="English"/>
                <FormControlLabel checked={value === 'ru'} value={'ru'}
                                  control={<Radio name={'language'}/>} label="Русский"/>
            </RadioGroup>

            <Button onClick={() => {
                changeLange(value);
                setSelectedLanguage(value)
            }}>Apply</Button>


        </Sheet>
    );
};

export default Settings;