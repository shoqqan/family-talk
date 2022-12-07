import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Post} from "../Profile/ProfilePostsContainer/Post/Post";
import {PostTypeNews} from "../../redux/reducers/newsReducer";

export const News = () => {
    const posts = useSelector<AppStateType, PostTypeNews[]>(state => state.newsPage.posts)
    return (
        <div>
            {posts.map((post)=>{
                return <Post name={post.name} id={post.postId} image={''} avatar={post.avatar} postText={post.postText} likes={1} dislikes={2}/>
            })}
        </div>
    );
};

