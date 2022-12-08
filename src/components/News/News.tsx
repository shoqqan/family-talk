import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Post} from "../Profile/ProfilePostsContainer/Post/Post";
import {PostTypeNews} from "../../redux/reducers/newsReducer";

export const News = () => {
    const posts = useSelector<AppStateType, PostTypeNews[]>(state => state.newsPage.posts)
    return (
        <div style={{marginLeft: 400}}>
            {posts.map((post) => {
                return <Post author={post.author} id={post.postId} image={post.image} postText={post.postText}/>
            })}
        </div>
    );
};

