import {v1} from "uuid";
import {Dispatch} from "redux";
import {authApi, familyApi, postsApi} from "../../API/api";
import {replaceWithReload} from "../../helpers/replaceWithReload";
import {ROUTES} from "../../helpers/roates";

type AddPostActionType = {
    type: 'ADD-POST'
    post: PostType
}
export type OnChangePostText = {
    type: 'ON-CHANGE-POST-TEXT',
    postText: string
}

export type SetPostsActionType = {
    type: 'SET-POSTS',
    posts: PostType[]
}
export type UserType = {
    login: string,
    password: string,
    name: string,
    picture: string,
    family_space_id: number
    posts: PostType[]
}

type GetPostsType = {
    type: 'GET-POSTS-FROM-BACK',
    posts: PostType[]
}
export type FamilySpaceType = {
    createdAt: string
    id: number,
    login: string,
    members: UserType[]
    password: string,
    picture: string
    title: string,
    updatedAt: string
}
export type  PostType = {
    id: string,
    title: string,
    picture: string,
    userId: number,
    createdAt: string

}
export type AuthorType = {
    id: string,
    name:string
    avatar: string
}
type ProfilePageType = {
    familySpace: any
    isLogged: boolean
    user: UserType
    posts: PostType[]
    newPostText: string

}
export type ProfileActionType =
    AddPostActionType
    | OnChangePostText
    | GetPostsType
    | ReturnType<typeof setFamilySpaceActionCreator>
    | ReturnType<typeof setLogged>
    | ReturnType<typeof setUser>
    | SetPostsActionType

export const addPostActionCreator = (post: PostType): AddPostActionType => {
    return {
        type: 'ADD-POST',
        post
    }
}

export const getPostsFromBackActionCreator = (posts: PostType[]): GetPostsType => {
    return {
        type: 'GET-POSTS-FROM-BACK',
        posts
    }
}
export const setFamilySpaceActionCreator = (familySpace: FamilySpaceType) => ({ //TODO: fix any
    type: 'SET-FAMILY-SPACE' as const,
    familySpace
})
export const setUser = (user: any) => (
    {
        type: 'SET-USER' as const,
        user
    }
)

export const setLogged = (isLogged: boolean) => ({
    type: 'SET-IS-LOGGED' as const,
    isLogged
})

export const setPosts = (posts: PostType[]) => (
    {
        type: 'SET-POSTS',
        posts
    }
)
export const MyAvatar = 'https://sun9-25.userapi.com/impg/cpvKKvfaw8jXHM7It9oO_QW4uH1uosHO87MaIw/SNEEKY7JZpk.jpg?size=1440x1800&quality=95&sign=4eca4098f257f21e1691b49981949322&type=album'

const initialState: ProfilePageType = {
    familySpace: {},
    isLogged: false,
    user: {
        name:'test',
        picture:'https://lowcars.net/wp-content/uploads/2017/02/userpic.png',
        posts:[],
        password:'test',
        login:'test',
        family_space_id:1
    },
    posts: [],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [action.post, ...state.posts],
                user: {...state.user, posts: [action.post, ...state.posts]}
            }
        case 'ON-CHANGE-POST-TEXT':
            state.newPostText = action.postText
            return {...state}
        case 'GET-POSTS-FROM-BACK':
            return state;
        case 'SET-FAMILY-SPACE':
            console.log(action.familySpace)
            return {...state, familySpace: action.familySpace}
        case 'SET-IS-LOGGED':
            return {...state, isLogged: action.isLogged}
        case 'SET-USER':
            console.log(action.user)
            return {...state, user: action.user}
        case 'SET-POSTS':
            return {...state, posts: action.posts, user: {...state.user, posts: action.posts}}
        default:
            return state
    }
}

export const authMeTC = () => (dispatch: Dispatch) => {
    authApi.me().then((res) => {
        dispatch(setLogged(true))
        dispatch(setUser(res))
    })
        .catch(() => {
            replaceWithReload(ROUTES.SIGN_IN)
        })
}

export const onChangeStatusTC = (dispatch: Dispatch) => {
    authApi.me().then((res) => {
        console.log(res)
    })
}
// export const getFamilySpace = ()=>{
//     familyApi.get().then((res)=>{
//         console.log(res)
//     })
// }
export const getPostsTC = () => (dispatch: Dispatch) => {
    postsApi.get().then((res) => {
        // console.log(res.posts)
        // console.log(res.data)
        dispatch(setPosts(res.posts.reverse()))
    })
        .catch(() => {
            replaceWithReload(ROUTES.SIGN_IN)
        })
}

export const createPostTC = (title: string, content: string) => (dispatch: Dispatch) => {
    postsApi.post(title, content)
        .then((res) => {
            dispatch(addPostActionCreator(res))
        })
        .catch(() => {
            replaceWithReload(ROUTES.SIGN_IN)
        })
}

export const getFamilySpaceTC = () =>(dispatch:Dispatch) =>{
    familyApi.get().then((res)=>{
        console.log(res.data)
        dispatch(setFamilySpaceActionCreator(res.data))
    })
}
