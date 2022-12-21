import React from "react";
import profilestyle from './Post.module.css'
import {Avatar, Container, IconButton, Paper, Stack} from "@mui/material";
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';

type PropsType = {
    id: string
    postText: string
    image?: string
    authorName: string
    avatar: string
}

export const Post = React.memo((props: PropsType) => {

    return (
        <Paper
            component="form"
            className={profilestyle.post}
            sx={{
                p: '5px 10px',
                bgcolor: '#40444B',
            }}>
            <div className={profilestyle.postInfo}>
                <Avatar src={props.avatar} alt={''} sx={{width: 40, height: 40}}/>
                <div className={profilestyle.postName}>{props.authorName}</div>
            </div>
            <div className={profilestyle.postText}>{props.postText}</div>
            <Container sx={props.image?{display: 'flex', justifyContent: 'center'}:{display:'none'}}><img src={props.image}/></Container>

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