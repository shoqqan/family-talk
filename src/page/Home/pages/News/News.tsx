import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/store";
import {getNewsTC, NewsPageType} from "../../../../redux/reducers/newsReducer";
import {PaginationControlled} from "../../../../components/Pagination/PaginationControlled";
import {Post} from "../Profile/ProfilePostsContainer/Post/Post";
import s from "./News.module.css";
import profilestyle from "../Profile/ProfilePostsContainer/ProfilePosts.module.css";
import {Paper} from "@mui/material";

export const News = () => {
    const newsPage = useSelector<AppStateType, NewsPageType>(state => state.newsPage)
    const dispatch = useDispatch<any>()
    const getNews = (nextPage: number) =>{
        dispatch(getNewsTC(nextPage))
    }
    useEffect(()=>{
        getNews(Number(newsPage.currentPage))
    },[])

    const news = newsPage.news.map((post) => {
        return <Post id={post.id} image={post.picture} postText={post.title} authorName={post.author.name} avatar={post.author.picture}/>
    })

    const placeholder = <Paper
        className={profilestyle.paper}
        sx={{
            p: '2px 4px',
            bgcolor: '#40444B',
        }}
    ></Paper>

    return (
        <div className={s.wrapper}>
            {
                newsPage.news.length ? news : placeholder
            }

            {!!newsPage.news.length &&  <PaginationControlled totalCount={Math.ceil(newsPage.totalCount / 10)} page={Number(newsPage.currentPage)}
                                   onPageChange={getNews}/>}
        </div>

    );
};

