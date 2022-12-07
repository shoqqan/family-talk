import {v1} from "uuid";

const user1 = v1()
const user2 = v1()
type PostType = {
    postId: string,
    postText: string,
    image: string
}
type UserType = {
    id: string,
    avatar: string
}
type AllUsersType = {
    users: UserType[]
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
    name:string
    postId: string,
    avatar: string,
    postText: string,
    likes: number,
    dislikes: number
}
const initialState: AllPostsType = {
    posts:
        [
            {
                name: 'Shoqan',
                postId: v1(),
                postText: 'yoouyu',
                avatar: 'https://cdn.discordapp.com/attachments/396667158270312450/1029538761584943184/GorDL0N36dM.jpg',
                likes: 10,
                dislikes: 1
            },
            {
                name: 'Abzal',
                postId: v1(),
                postText: 'lol',
                avatar: 'https://cdn.discordapp.com/attachments/396667158270312450/1029538761584943184/GorDL0N36dM.jpg',
                likes: 10,
                dislikes: 1
            },
        ],
}


export const newsReducer = (state: AllPostsType = initialState,action:any) => {
    return state
}

