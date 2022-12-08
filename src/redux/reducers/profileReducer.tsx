import {v1} from "uuid";

type AddPostActionType = {
    type: 'ADD-POST'
    post:PostType
}
export type OnChangePostText = {
    type: 'ON-CHANGE-POST-TEXT',
    postText: string
}


export type UserType = {
    login:string,
    password:string,
    name:string,
    picture:string,
    family_space_id:number
}

type GetPostsType = {
    type: 'GET-POSTS-FROM-BACK',
    posts: PostType[]
}

export type PostType = {
    id: string,
    title: string,
    picture:string,
    userId:number,
    createdAt:string

}
type ProfilePageType = {
    user: any
    posts: PostType[]
    newPostText: string

}
export type ProfileActionType =
    AddPostActionType
    | OnChangePostText
    | GetPostsType


export const addPostActionCreator = (post: PostType): AddPostActionType => {
    return {
        type: 'ADD-POST',
        post
    }
}

export const getPostsFromBack = (posts: PostType[]): GetPostsType => {
    return {
        type: 'GET-POSTS-FROM-BACK',
        posts
    }
}

const MyId = v1()
export const MyAvatar = 'https://sun9-25.userapi.com/impg/cpvKKvfaw8jXHM7It9oO_QW4uH1uosHO87MaIw/SNEEKY7JZpk.jpg?size=1440x1800&quality=95&sign=4eca4098f257f21e1691b49981949322&type=album'
const initialState: ProfilePageType = {
    user: {

    },
    posts: [


    ],

    newPostText: ''
}
export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType) => {
    switch (action.type) {
        case 'ADD-POST':

            return {...state, posts: [action.post,...state.posts]}
        case 'ON-CHANGE-POST-TEXT':
            state.newPostText = action.postText
            return {...state}
        case 'GET-POSTS-FROM-BACK':
            return {...state,posts: action.posts}
        default:
            return state
    }

}