import React, {useState} from "react";
import profilestyle from './Post.module.css'
import {Avatar, Button, Container, IconButton, Paper, Stack} from "@mui/material";
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';

type PropsType = {
    name: string
    id: string
    avatar: string
    postText: string
    likes: number,
    dislikes: number
    image: string

}
export const Post = React.memo((props: PropsType) => {

    return (
        // <div className={profilestyle.parentContainer}>
        //     <Avatar src={props.image} alt={''} sx={{width: 60, height: 60}}/>
        //     {props.postText}
        // </div>
        <Paper
            component="form"
            sx={{
                p: '5px 10px',
                bgcolor: '#40444B',
                display: 'flex',
                flexDirection: 'column',
                rowGap: 2,
                width: 700,
                height: 150,
                marginTop: 5,
                marginBottom: 5
            }}>
            <div className={profilestyle.postInfo}>
                <Avatar src={props.avatar} alt={''} sx={{width: 40, height: 40}}/>
                <div className={profilestyle.postName}>{props.name}</div>
            </div>
            <div className={profilestyle.postText}>{props.postText}</div>
            <Stack spacing={2} direction="row">
                {/*<IconButton color='default'>*/}
                {/*    <ThumbUpOffAltOutlinedIcon/>*/}
                {/*</IconButton>*/}
                <IconButton>
                    <ThumbUpOffAltOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <ChatRoundedIcon/>
                </IconButton>
            </Stack>
        </Paper>


    )
})