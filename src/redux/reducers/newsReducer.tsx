import {v1} from "uuid";
import {MyAvatar, PostType} from "./profileReducer";
import {Dispatch} from "redux";
import {newsApi} from "../../API/api";
import {setIsLoadingActionCreator} from "./appReducer";

export type NewsPageType = {
    currentPage: string
    news: PostType[],
    totalCount: number
}


export type AuthorType = {
    createdAt: string
    family_space_id: number
    id: number,
    login: string
    name: string
    password: string
    picture: string
    status: string
}
// type AddDislikeType = {
//     type: 'ADD-DISLIKE'
//     id: string
// }
// export type PostTypeNews = {
//     id: number,
//     title: string,
//     content: string
//     picture: string | null,
//     createdAt: string
//     author: AuthorNewsType
// }
type getNewsActionType = {
    type: 'GET-NEWS'
    newsPageData: NewsPageType
}

export const getNewsActionCreator = (newsPageData: NewsPageType) => (
    {type: 'GET-NEWS', newsPageData}
)
type ActionType = getNewsActionType
const initialState: NewsPageType = {
    currentPage: '1',
    news: [],
    totalCount: 17
}


export const newsReducer = (state: NewsPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case "GET-NEWS":
            return action.newsPageData
        default:
            return state
    }
}


export const getNewsTC = (page: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsLoadingActionCreator(true))
        newsApi.get(page).then((res) => {
            dispatch(getNewsActionCreator(res.data))
        })
            .then(
                () => {
                    dispatch(setIsLoadingActionCreator(false))
                }
            )
            .finally(()=>{
                dispatch(setIsLoadingActionCreator(false))

            })
    }
}

