import {
    createPostTC, getFamilySpaceTC, getPostsTC,
    PostType,
    UserType
} from "../../../redux/reducers/profileReducer";
import profilestyle from './ProfilePosts.module.css'
import {Post} from "./Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {ChangeEvent, useEffect, useState} from "react";
import {Button, Divider, IconButton, InputBase, Paper, TextField} from "@mui/material";
import FamilyCard from "../../FamilyCard/FamilyCard";
import {v1} from "uuid";


export const ProfilePosts = () => {
    const posts = useSelector<AppStateType, PostType[]>(state => state.profilePage.posts)
    const user = useSelector<AppStateType, UserType>(state => state.profilePage.user)

    const dispatch = useDispatch<any>()
    const [text, setText] = useState('')
    const onAddPost = () => {
        dispatch(createPostTC(text,text))

    }
    const onPostChange = (text: ChangeEvent<HTMLTextAreaElement>) => {
        setText(text.currentTarget.value)
    }
    useEffect(()=>{
        dispatch(getPostsTC())
        dispatch(getFamilySpaceTC())

    },[])

    return (
        <div className={profilestyle.content}>
            <div>
                <div>
                    <Paper
                        component="form"
                        sx={{p: '2px 4px', bgcolor: '#40444B', display: 'flex', alignItems: 'center', width: 700}}

                    >
                        <InputBase
                            sx={{ml: 1, flex: 1, color: '#FEFEFE'}}
                            placeholder="What's new?"
                            inputProps={{'aria-label': 'search google maps'}}
                            onChange={onPostChange}
                            value={text}
                        />

                        <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
                        <IconButton color="primary" sx={{p: '10px'}} aria-label="directions">
                            <Button variant="outlined" onClick={onAddPost}>+</Button>
                        </IconButton>
                    </Paper>
                </div>
                <div className={profilestyle.posts}>

                    {Array.isArray(posts)?posts.map((post) => {
                        return (<Post
                            author={{id: v1(), name: user.name, avatar: user.picture}}
                            key={post.id}
                            id={post.id}
                            image={post.picture}
                            postText={post.title}

                        />)

                    }):null}
                </div>
            </div>
            <FamilyCard/>
        </div>
    )
}