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
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {FamilySpaceType, UserType} from "../../redux/reducers/profileReducer";

export default function FamilyCard() {
    const family = useSelector<AppStateType,FamilySpaceType>(state => state.profilePage.familySpace)
    const user = useSelector<AppStateType,UserType>(state => state.profilePage.user)


    return (
        <Card sx={{ maxWidth: 345, maxHeight: 500, display:'flex', flexDirection:'column', bgcolor:'#202225'}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                image={family.picture}
            />
            <CardContent sx={{bgcolor:'#40444B'}}>
                <Typography sx={{color:'#FEFEFE'}} gutterBottom variant="h5" component="div">
                    {`${family.title}`}
                </Typography>
                <Typography sx={{color:'#FEFEFE'}} variant="body2" color="text.secondary">
                    Hello we are first family in the FamilyTalk
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