import {createPostTC, getFamilySpaceTC, getPostsTC, PostType, UserType} from "../../../../redux/reducers/profileReducer";
import profilestyle from './ProfilePosts.module.css'
import {Post} from "./Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/store";
import {ChangeEvent, useEffect, useState} from "react";
import {Button, Divider, Grid, IconButton, InputBase, Paper} from "@mui/material";
import FamilyCard from "./FamilyCard/FamilyCard";
import {useTranslation} from "react-i18next";
import EmptyPosts from "../../../../components/EmptyPosts/EmptyPosts";
// Editable span
// if familymember pic null return default

export const ProfilePosts = () => {
    const posts = useSelector<AppStateType, PostType[]>(state => state.profilePage.posts)
    const user = useSelector<AppStateType, UserType>(state => state.profilePage.user)
    const dispatch = useDispatch<any>()
    const {t} = useTranslation()
    const [text, setText] = useState('')

    const onAddPost = () => {
        dispatch(createPostTC(text, text))
    }

    const onPostChange = (text: ChangeEvent<HTMLTextAreaElement>) => {
        setText(text.currentTarget.value)
    }

    useEffect(() => {
        dispatch(getPostsTC())
        dispatch(getFamilySpaceTC())

    }, [])

    return (
        <div className={profilestyle.content}>
            <Grid container display='flex' justifyContent={'space-between'} columnSpacing={2}>
                <Grid>
                    <div>
                        <div>
                            <Paper
                                component="form"
                                sx={{
                                    p: '2px 4px',
                                    bgcolor: '#40444B',
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: 700
                                }}
                                // style={profilestyle.postContainer}
                            >
                                <InputBase
                                    sx={{ml: 1, flex: 1, color: '#FEFEFE'}}
                                    placeholder={t("PROFILE.POST_TITLE")}
                                    inputProps={{'aria-label': 'search google maps'}}
                                    onChange={onPostChange}
                                    value={text}
                                />
                                {/*<FileUploadInput file={file} setFile={setFile}/>*/}

                                <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
                                <IconButton color="primary" sx={{p: '10px'}} aria-label="directions">
                                    <Button variant="outlined" onClick={onAddPost}>+</Button>
                                </IconButton>
                            </Paper>
                        </div>
                        <div className={profilestyle.posts}>

                            {posts.length>0 ? posts.map((post) => {
                                return (<Post

                                    key={post.id}
                                    id={post.id}
                                    image={post.picture}
                                    postText={post.title}
                                    avatar={user.picture}
                                    authorName={user.name}

                                />)

                            }) : <EmptyPosts news={false}/>}
                        </div>
                    </div>
                </Grid>
                <Grid>
                    <FamilyCard/>
                </Grid>
            </Grid>
        </div>
    )
}