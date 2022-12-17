import React, {useState} from "react";
import profilestyle from './Post.module.css'
import {Avatar, Button, Container, IconButton, Paper, Stack} from "@mui/material";
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import {AuthorType} from "../../../../redux/reducers/profileReducer";

type PropsType = {
    id: string
    postText: string
    image?: string
    author: AuthorType


}
export const Post = React.memo((props: PropsType) => {

    return (
        <Paper
            component="form"
            sx={{
                p: '5px 10px',
                bgcolor: '#40444B',
                display: 'flex',
                flexDirection: 'column',
                rowGap: 2,
                width: 700,

                marginTop: 5,
                marginBottom: 5
            }}>
            <div className={profilestyle.postInfo}>
                <Avatar src={props.author.avatar} alt={''} sx={{width: 40, height: 40}}/>
                <div className={profilestyle.postName}>{props.author.name}</div>
            </div>
            <div className={profilestyle.postText}>{props.postText}</div>
            <Container><img style={{width: '500px'}} src={props.image}/></Container>

            <Stack spacing={2} direction="row">
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