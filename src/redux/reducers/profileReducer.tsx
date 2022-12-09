import {v1} from "uuid";

type AddPostActionType = {
    type: 'ADD-POST'
    post: PostType
}
export type OnChangePostText = {
    type: 'ON-CHANGE-POST-TEXT',
    postText: string
}


export type UserType = {
    login: string,
    password: string,
    name: string,
    picture: string,
    family_space_id: number
}

type GetPostsType = {
    type: 'GET-POSTS-FROM-BACK',
    posts: PostType[]
}

export type PostType = {
    id: string,
    title: string,
    picture: string,
    userId: number,
    createdAt: string

}
type ProfilePageType = {
    familySpace: any
    isLogged: boolean
    user: any
    posts: PostType[]
    newPostText: string

}
export type ProfileActionType =
    AddPostActionType
    | OnChangePostText
    | GetPostsType
    | ReturnType<typeof setFamilySpace>
    | ReturnType<typeof setLogged>


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
export const setFamilySpace = (familySpace: any) => ({
    type: 'SET-FAMILY-SPACE' as const,
    familySpace
})

export const setLogged = (isLogged: boolean) => ({
    type: 'SET-IS-LOGGED' as const,
    isLogged
})
const MyId = v1()
export const MyAvatar = 'https://sun9-25.userapi.com/impg/cpvKKvfaw8jXHM7It9oO_QW4uH1uosHO87MaIw/SNEEKY7JZpk.jpg?size=1440x1800&quality=95&sign=4eca4098f257f21e1691b49981949322&type=album'
const initialState: ProfilePageType = {
    familySpace: {},
    isLogged: false,
    user: {
        photo: MyAvatar,
        wallPaper: '\n' +
            'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-in-a-neon-laser-light-great-for-backgrounds-and-wallpapers_181624-9331.jpg?w=1380&t=st=1670544089~exp=1670544689~hmac=b4cbb38ecd954f50da88ea12f9612722d24c6df5ec471efc1820c0f111bb71dc',
    },
    posts: [
        {
            id: v1(),
            title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
                '\n' +
                'Why do we use it?\n' +
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
                '\n    ',
            picture: 'https://sun1.dataix-kz-akkol.userapi.com/impg/nV7CFLBXUqWFglPg7ABdA9R1Q82SYG14pTJIdA/Hpb46xlSWE8.jpg?size=1280x960&quality=96&sign=0925b4d99c714f383b200aac208dc862&type=album',
            userId:2,
            createdAt: ''
        },
        {
            id: v1(),
            title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
                '\n' +
                'Why do we use it?\n' +
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
                '\n    ',
            picture: 'https://sun1.dataix-kz-akkol.userapi.com/impg/nV7CFLBXUqWFglPg7ABdA9R1Q82SYG14pTJIdA/Hpb46xlSWE8.jpg?size=1280x960&quality=96&sign=0925b4d99c714f383b200aac208dc862&type=album',
            userId:2,
            createdAt: ''
        },
        {
            id: v1(),
            title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
                '\n' +
                'Why do we use it?\n' +
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
                '\n    ',
            picture: 'https://sun1.dataix-kz-akkol.userapi.com/impg/nV7CFLBXUqWFglPg7ABdA9R1Q82SYG14pTJIdA/Hpb46xlSWE8.jpg?size=1280x960&quality=96&sign=0925b4d99c714f383b200aac208dc862&type=album',
            userId:2,
            createdAt: ''
        },
        {
            id: v1(),
            title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
                '\n' +
                'Why do we use it?\n' +
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
                '\n    ',
            picture: 'https://sun1.dataix-kz-akkol.userapi.com/impg/nV7CFLBXUqWFglPg7ABdA9R1Q82SYG14pTJIdA/Hpb46xlSWE8.jpg?size=1280x960&quality=96&sign=0925b4d99c714f383b200aac208dc862&type=album',
            userId:2,
            createdAt: ''
        },
    ],
    newPostText: ''
}
export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            return {...state, posts: [action.post, ...state.posts]}
        case 'ON-CHANGE-POST-TEXT':
            state.newPostText = action.postText
            return {...state}
        case 'GET-POSTS-FROM-BACK':
            return state;
            // return {...state, posts: action.posts}
        case 'SET-FAMILY-SPACE':
            return {...state, familySpace: action.familySpace}
        case 'SET-IS-LOGGED':
            return {...state, isLogged: action.isLogged}
        default:
            return state
    }
}