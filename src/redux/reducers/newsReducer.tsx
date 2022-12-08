import {v1} from "uuid";
import {MyAvatar} from "./profileReducer";

const user1 = v1()
const user2 = v1()
type PostType = {
    postId: string,
    postText: string,
    image: string
}
export type AuthorType = {
    id: string,
    name:string
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
const initialState: AllPostsType = {
    posts:
        [
            {
                postId: v1(),
                postText: 'yoouyu',
                image: 'https://sun1.dataix-kz-akkol.userapi.com/impg/nV7CFLBXUqWFglPg7ABdA9R1Q82SYG14pTJIdA/Hpb46xlSWE8.jpg?size=1280x960&quality=96&sign=0925b4d99c714f383b200aac208dc862&type=album',
                author:{id:v1(),name:'Shoqan',avatar:MyAvatar}
            },
            {
                postId: v1(),
                postText: 'lol',
                image:'',
                author:{id:v1(),name:'Shoqan',avatar:MyAvatar}
            },
        ],
}


export const newsReducer = (state: AllPostsType = initialState,action:any) => {
    return state
}

