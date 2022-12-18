import {v1} from "uuid";
import {MyAvatar} from "./profileReducer";
import {Dispatch} from "redux";
import {newsApi} from "../../API/api";

type PostType = {
    id: number,
    title: string,
    content: string,
    picture: string,
    user_id: number
}
type AuthorType = {
    id: string,
    name: string
    avatar: string
}
type AllUsersType = {
    users: AuthorType
}
type AllPostsType = {
    posts: PostTypeNews[]
}
type InitialStateType = {
    posts: AllPostsType
}
type AddLikeType = {
    type: 'ADD-LIKE'
    id: string

}
type AddDislikeType = {
    type: 'ADD-DISLIKE'
    id: string
}
export type PostTypeNews = {
    postId: string,
    postText: string,
    image: string
    author: AuthorType
}
type getNewsActionType = {
    type: 'GET-NEWS'
    news: PostTypeNews[]

}
// const ActionType =
const initialState: AllPostsType = {
    posts:
        [
            {
                postId: v1(),
                postText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
                    '\n' +
                    'Why do we use it?\n' +
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
                    '\n    ',
                image: 'https://sun1.dataix-kz-akkol.userapi.com/impg/nV7CFLBXUqWFglPg7ABdA9R1Q82SYG14pTJIdA/Hpb46xlSWE8.jpg?size=1280x960&quality=96&sign=0925b4d99c714f383b200aac208dc862&type=album',
                author: {id: v1(), name: 'Shoqan', avatar: MyAvatar}
            },
            {
                postId: v1(),
                postText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
                    '\n' +
                    'Why do we use it?\n' +
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
                    '\n',
                image: '',
                author: {id: v1(), name: 'Shoqan', avatar: MyAvatar}
            },
            {
                postId: v1(),
                postText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
                    '\n' +
                    'Why do we use it?\n' +
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
                    '\n',
                image: 'https://sun1.dataix-kz-akkol.userapi.com/impg/nV7CFLBXUqWFglPg7ABdA9R1Q82SYG14pTJIdA/Hpb46xlSWE8.jpg?size=1280x960&quality=96&sign=0925b4d99c714f383b200aac208dc862&type=album',
                author: {id: v1(), name: 'Shoqan', avatar: MyAvatar}
            },
            {
                postId: v1(),
                postText: 'lol',
                image: '',
                author: {id: v1(), name: 'Shoqan', avatar: MyAvatar}
            },
        ],
}


export const newsReducer = (state: AllPostsType = initialState, action: any) => {
    return state
}


export const getNewsTC = () => {
    return (dispatch: Dispatch) => {
        newsApi.get().then((res) => {
            console.log(res.data)
        })
    }
}

