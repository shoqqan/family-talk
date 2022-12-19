import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Post} from "../Profile/ProfilePostsContainer/Post/Post";
import {getNewsTC, NewsPageType} from "../../redux/reducers/newsReducer";
import {PaginationControlled} from "../Pagination/PaginationControlled";
import {PostType} from "../../redux/reducers/profileReducer";

export const News = () => {
    const newsPage = useSelector<AppStateType, NewsPageType>(state => state.newsPage)
    const dispatch = useDispatch<any>()
    const getNews = (nextPage: number) =>{
        dispatch(getNewsTC(nextPage))
    }
    useEffect(()=>{
        // dispatch(getNewsTC())
        getNews(Number(newsPage.currentPage))
    },[])

    return (
        <div style={{marginLeft: 400}}>
            {newsPage.news.map((post) => {
                return <Post id={post.id} image={post.picture} postText={post.title} authorName={post.author.name} avatar={post.author.picture}/>
            })}
            <PaginationControlled totalCount={Math.ceil(newsPage.totalCount/10)} page={Number(newsPage.currentPage)} onPageChange={getNews}/>
        </div>

    );
};

