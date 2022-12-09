import React, {ChangeEvent} from 'react';
import {Sheet} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {Button, FormControlLabel, Link, Radio, RadioGroup, TextField} from "@mui/material";
import {useFormik} from "formik";

const Settings = () => {
    const formik = useFormik({
        initialValues: {
            language: ""
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const handleRadioButtons = (e: ChangeEvent<HTMLInputElement>) => {
        formik.values.language = e.currentTarget.value
        console.log(formik.values.language)
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
                    onChange={e => handleRadioButtons(e)}>
                    <FormControlLabel checked={false} value={'kazakh'} control={<Radio name={"language"}/>} label="Қазақша"/>
                    <FormControlLabel checked={true} value={'english'} control={<Radio/>} label="English"/>
                    <FormControlLabel checked={false}  value={'russian'}control={<Radio/>} label="Русский"/>
                </RadioGroup>

                <Typography level="body2" color={"neutral"}>Theme</Typography>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name={'language'}
                    value={formik.values.language}
                    onChange={e => handleRadioButtons(e)}>
                    <FormControlLabel checked={false} value={'kazakh'} control={<Radio/>} label="White"/>
                    <FormControlLabel checked={true} value={'english'} control={<Radio/>} label="Dark"/>
                </RadioGroup>
                {/*<input*/}
                {/*    type="radio"*/}
                {/*    id="one"*/}
                {/*    name="group"*/}
                {/*    value="One"*/}
                {/*    onChange={e => handleRadioButtons(e)}*/}
                {/*    required*/}
                {/*/>*/}
                {/*<label htmlFor="one">One</label>*/}
                {/*<br />*/}

                {/*<input*/}
                {/*    type="radio"*/}
                {/*    id="two"*/}
                {/*    name="group"*/}
                {/*    value="Two"*/}
                {/*    onChange={e => handleRadioButtons(e)}*/}
                {/*/>*/}
                {/*<label htmlFor="two">Two</label>*/}

                {/*<Typography*/}
                {/*    endDecorator={<Link href="/sign-in">Sign in</Link>}*/}
                {/*    fontSize="sm"*/}
                {/*    sx={{alignSelf: 'center'}}*/}
                {/*>*/}
                {/*    Already have an account?*/}

                {/*</Typography>*/}

            </Sheet>
        </form>
    );
};

export default Settings;