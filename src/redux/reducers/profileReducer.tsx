import {v1} from "uuid";

type AddPostActionType = {
    type: 'ADD-POST'
    text: string
}
export type OnChangePostText = {
    type: 'ON-CHANGE-POST-TEXT',
    postText: string
}
type AddStateMessageType = {
    type: 'ADD-STATE-MESSAGE',
    dialogMessage: string
}
type OnChangeMessageText = {
    type: 'ON-CHANGE-MESSAGE-TEXT'
    messageText: string
}
type AddLikeType = {
    type: 'ADD-LIKE'
    id: string

}
type AddDislikeType = {
    type: 'ADD-DISLIKE'
    id: string

}
export type UserType = {
    userId: string,
    name: string,
    avatar: string
    profileWallpaper: string,
    description: string
}

export type PostType = {
    postId: string,
    avatar: string,
    postText: string,
    likes: number,
    dislikes: number
}
type ProfilePageType = {
    user: UserType
    posts: PostType[]
    newPostText: string

}
export type ProfileActionType =
    AddPostActionType
    | OnChangePostText
    | AddLikeType
    | AddDislikeType
    | OnChangeMessageText
    | AddStateMessageType
export const addPostActionCreator = (text: string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        text
    }
}

const MyId = v1()
const MyAvatar = 'https://sun9-25.userapi.com/impg/cpvKKvfaw8jXHM7It9oO_QW4uH1uosHO87MaIw/SNEEKY7JZpk.jpg?size=1440x1800&quality=95&sign=4eca4098f257f21e1691b49981949322&type=album'
const initialState: ProfilePageType = {
    user: {
        userId: MyId,
        name: 'Tatayev Shoqan',
        avatar: MyAvatar,
        profileWallpaper: 'https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80',
        description:"Hello i am future front-end developer"
    },
    posts: [
        {

            postId: v1(),
            avatar: MyAvatar,
            postText: 'Hello There!',
            likes: 10,
            dislikes: 1
        },

    ],

    newPostText: ''
}
export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {

                postId: v1(),
                avatar: MyAvatar,
                postText: action.text,
                likes: 0,
                dislikes: 0
            }
            return {...state, posts: [newPost, ...state.posts]}
        case 'ON-CHANGE-POST-TEXT':
            state.newPostText = action.postText
            return {...state}
        case 'ADD-LIKE':
            state.posts.map(p => {
                if (p.postId === action.id) {
                    p.likes += 1
                }
            })
            return {...state, posts: state.posts.map(p => ({...p}))}
        case 'ADD-DISLIKE':
            state.posts.map(p => {
                if (p.postId === action.id) {
                    p.dislikes += 1
                }
            })
            return {...state, posts: state.posts.map(p => ({...p}))}
        default:
            return state
    }

}