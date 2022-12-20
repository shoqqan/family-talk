import {Dispatch} from "redux";
import {authApi, familyApi, postsApi} from "../../API/api";
import {replaceWithReload} from "../../helpers/replaceWithReload";
import {ROUTES} from "../../helpers/roates";
import {AuthorType} from "./newsReducer";
import {setIsLoadingActionCreator} from "./appReducer";

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

export type ChangeProfileStatusActionType = {
    type: 'CHANGE-PROFILE-STATUS',
    title: string
}
export type UserType = {
    login: string,
    password: string,
    name: string,
    picture: string,
    status: string,
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
    status: string
}
export type  PostType = {
    author: AuthorType
    id: string,
    title: string,
    content: string
    picture: string,
    createdAt: string

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
    | ReturnType<typeof setLoggedActionCreator>
    | ReturnType<typeof setUserActionCreator>
    | SetPostsActionType
    | ChangeProfileStatusActionType
// | SetIsLoadedActionType

export const addPostActionCreator = (post: PostType): AddPostActionType => {
    return {
        type: 'ADD-POST',
        post
    }
}

export const changeProfileTitle = (title: string): ChangeProfileStatusActionType => (
    {type: 'CHANGE-PROFILE-STATUS', title}
)
export const setFamilySpaceActionCreator = (familySpace: FamilySpaceType) => ({ //TODO: fix any
    type: 'SET-FAMILY-SPACE' as const,
    familySpace
})
export const setUserActionCreator = (user: any) => (
    {
        type: 'SET-USER' as const,
        user
    }
)

export const setLoggedActionCreator = (isLogged: boolean) => ({
    type: 'SET-IS-LOGGED' as const,
    isLogged
})

export const setPostsActionCreator = (posts: PostType[]) => (
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
        name: 'test',
        picture: 'https://lowcars.net/wp-content/uploads/2017/02/userpic.png',
        posts: [],
        status: 'Hey there i am using FamilyTalk!',
        password: 'test',
        login: 'test',
        family_space_id: 1
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
        case 'SET-FAMILY-SPACE': {
            if (action.familySpace.picture) {
                return {...state, familySpace: action.familySpace}
            } else {
                action.familySpace.picture = 'https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-family-icon-design-template-vector-illustration-png-image_710428.jpg'
                return {...state, familySpace: action.familySpace}

            }
        }

        case 'SET-IS-LOGGED':
            return {...state, isLogged: action.isLogged}
        case 'SET-USER': {
            if (action.user.picture !== '') {
                return {...state, user: action.user}
            } else {
                return {
                    ...state,
                    user: {...action.user, picture: 'https://lowcars.net/wp-content/uploads/2017/02/userpic.png'}
                }
            }
        }
        case 'SET-POSTS':
            return {...state, posts: action.posts, user: {...state.user, posts: action.posts}}
        case 'CHANGE-PROFILE-STATUS':
            return {...state, user: {...state.user, status: action.title}}
        default:
            return state
    }
}

export const authMeTC = () => (dispatch: Dispatch) => {
    dispatch(setIsLoadingActionCreator(true))
    authApi.me()
        .then((res: UserType) => {
            dispatch(setLoggedActionCreator(true))
            dispatch(setUserActionCreator(res))
            setIsLoadingActionCreator(false)
        })
        .catch(() => {
            localStorage.removeItem('token')
        })
}

export const getPostsTC = () => (dispatch: Dispatch) => {
    dispatch(setIsLoadingActionCreator(true))
    postsApi.get().then((res) => {
        dispatch(setPostsActionCreator(res.posts.reverse()))
    })
        .catch(() => {
            replaceWithReload(ROUTES.SIGN_IN)
        })
        .finally(() => {
            dispatch(setIsLoadingActionCreator(false))
        })
}

export const createPostTC = (title: string, content: string, pircture?: string) => (dispatch: Dispatch) => {
    dispatch(setIsLoadingActionCreator(true))
    postsApi.post(title, content, pircture)
        .then((res) => {
            dispatch(addPostActionCreator(res))
        })
        .catch(() => {
            replaceWithReload(ROUTES.SIGN_IN)
        })
        .finally(() => {
            dispatch(setIsLoadingActionCreator(false))
        })
}

export const getFamilySpaceTC = () => (dispatch: Dispatch) => {
    dispatch(setIsLoadingActionCreator(true))
    familyApi.get().then((res) => {
        dispatch(setFamilySpaceActionCreator(res.data))
    })

        .finally(() => {
            dispatch(setIsLoadingActionCreator(false))
        })

}

export const postAuthMe = (title: string) => (dispatch: Dispatch) => {
    authApi.me()
}
