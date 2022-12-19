import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, Link} from "@mui/material";
import {Avatar, AvatarGroup} from "@mui/joy";
import {ROUTES} from "../../helpers/roates";
import {replaceWithReload} from "../../helpers/replaceWithReload";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {FamilySpaceType, getFamilySpaceTC, UserType} from "../../redux/reducers/profileReducer";
import {EditableSpan} from "../EditableSpan/EditableSpan";

export default function FamilyCard() {
    const family = useSelector<AppStateType,FamilySpaceType>(state => state.profilePage.familySpace)
    const user = useSelector<AppStateType,UserType>(state => state.profilePage.user)
    const [famName,setFamName] = useState('')
    const [famDesc,setFamDesc] = useState('')

    useEffect(()=>{
        getFamilySpaceTC()
        setFamName(family.title)
        setFamDesc(family.status)
    },[])


    return (
        <Card sx={{ maxWidth: 345,height:520, display:'flex', flexDirection:'column', bgcolor:'#202225'}}>
            <CardMedia
                component="img"
                alt="Family picture"
                height="30"
                image={family.picture}
                sx={{height:'50px'}}
            />
            <CardContent sx={{bgcolor:'#40444B'}}>
                <Typography sx={{color:'#FEFEFE'}} gutterBottom variant="h5" component="div">
                    {/*{`${family.title}`}*/} <EditableSpan value={famName} onChange={setFamName}/>
                </Typography>
                <Typography sx={{color:'#FEFEFE'}} variant="body2" color="text.secondary">
                    {/*Hello we are first family in the FamilyTalk*/} <EditableSpan value={famDesc} onChange={setFamDesc}/>
                </Typography>
            </CardContent>
            <CardActions sx={{}}>
                <Button onClick={()=>{replaceWithReload(ROUTES.SIGN_UP_FAMILY_MEMBER)}}>ADD FAMILY MEMBER</Button>
            </CardActions>
            <AvatarGroup sx={{flexBasis:'10rem', color:'#FEFEFE', justifyContent:'space-evenly'}}>
                <Avatar/>
                <Avatar/>
                <Avatar/>
            </AvatarGroup>
        </Card>
    );
}