import {
    addPostActionCreator,
    getPostsFromBack,
    MyAvatar,
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
import axios from "axios";
import {token} from "../../SignUpUser/SignUpUser";


export const ProfilePosts = () => {
    const posts = useSelector<AppStateType, PostType[]>(state => state.profilePage.posts)
    // const user = useSelector<AppStateType, UserType>(state => state.profilePage.user)
    // const [posts,setPosts] = useState<any[]>([])
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const onAddPost = () => {
        // dispatch(addPostActionCreator(text))
        // setText('')
        axios.post('https://family-talk.up.railway.app/posts', {
            title: text,
            picture: 'hah',
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            dispatch(addPostActionCreator(res.data))
            // console.log(res.data);
            // dispatch(getPostsFromBack(res.data))
        })

    }
    useEffect(() => {
        axios.get('https://family-talk.up.railway.app/posts', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res.data);
            dispatch(getPostsFromBack(res.data))
        })

        // axios.get('https://family-talk.up.railway.app/auth/registration',{
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // }).then((res) => {
        //     console.log(res.data);
        //     dispatch(getPostsFromBack(res.data))
        //     setPosts(res.data)
        // })
    }, [])
    const onPostChange = (text: ChangeEvent<HTMLTextAreaElement>) => {
        setText(text.currentTarget.value)
    }
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
                    {/*<button onClick={onAddPost}>+</button>*/}
                </div>
                <div className={profilestyle.posts}>

                    {posts.map((post) => {
                        return (<Post
                            author={{id: v1(), name: "Shoqan", avatar: MyAvatar}}
                            key={post.id}
                            id={post.id}
                            image={post.picture}
                            postText={post.title}

                        />)

                    })}
                </div>
            </div>
            <FamilyCard/>
        </div>
    )
}