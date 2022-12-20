import axios, {AxiosInstance} from "axios";

const instance = (): AxiosInstance => {
    const token = localStorage.getItem('token')
    return axios.create(
        {
            baseURL: 'https://family-talk.up.railway.app/',
            headers: {Authorization: `Bearer ${token}`}
        }
    )

}
export const authApi = {
    me: () => {
        return instance().get<any>(`auth/me`).then(r => r.data.user)
    }
}

export const familyApi ={
    get: ()=>{
        return instance().get<any>('family-space').then(r=>r)
    }
}
export const postsApi = {
    get: () => {
        return instance().get(`posts`).then(r => r.data)
    },
    post: (title: string, content: string, picture?: string) => {
        return instance().post('posts', {title, content, picture}).then(r => r.data)
    }
}

export const newsApi = {
    get: (page:number) =>{
        return instance().get(`news?page=${page}`).then(r=>r)
    }
}