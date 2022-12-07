import {addPostActionCreator, PostType, UserType} from "../../../redux/reducers/profileReducer";
import profilestyle from './ProfilePosts.module.css'
import {Post} from "./Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {ChangeEvent, useState} from "react";
import {Button, Divider, IconButton, InputBase, Paper, TextField} from "@mui/material";


export const ProfilePosts = () => {
    const posts = useSelector<AppStateType, PostType[]>(state => state.profilePage.posts)
    const user = useSelector<AppStateType, UserType>(state => state.profilePage.user)
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const onAddPost = () => {
        dispatch(addPostActionCreator(text))
        setText('')
    }
    const onPostChange = (text: ChangeEvent<HTMLTextAreaElement>) => {
        setText(text.currentTarget.value)
    }
    return (
        <div className={profilestyle.content}>
            <div style={{marginTop: 20, marginBottom: 20}}>
                {/*<textarea onChange={onPostChange} value={text}/>*/}
                {/*<TextField*/}
                {/*    fullWidth*/}

                {/*    id="outlined-required"*/}
                {/*    label="What's new?"*/}
                {/*    defaultValue={text}*/}
                {/*    onChange={onPostChange}*/}
                {/*/>*/}
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
                {/*<button onClick={onAddPost}>+</button>*/}
            </div>
            <div className={profilestyle.posts}>

                {posts.map((post) => {
                    return (<Post
                        key={post.postId}
                        name={user.name}
                        id={post.postId}
                        avatar={post.avatar}
                        image={''}
                        postText={post.postText}
                        likes={post.likes}
                        dislikes={post.dislikes}

                    />)

                })}
            </div>
        </div>
    )
}