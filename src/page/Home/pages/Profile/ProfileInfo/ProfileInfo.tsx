import React, {useEffect, useState} from "react";
import style from './ProfileInfo.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../../redux/store";
import {EditableSpan} from "../../../../../components/EditableSpan/EditableSpan";
import {Typography} from "@mui/material";
import {AuthorType} from "../../../../../redux/reducers/newsReducer";


export const ProfileInfo = () => {
    const profileInfo = useSelector<AppStateType, AuthorType>(state => state.profilePage.user)
    const [desc, setDesc] = useState('')

    useEffect(() => {
        setDesc(profileInfo.status)
    }, [])
    return (
        <>
            <div className={style.profile}>
                <div className={style.avatar}>
                    <img src={profileInfo.picture ? profileInfo.picture : 'https://lowcars.net/wp-content/uploads/2017/02/userpic.png'} alt={'avatar'}/>
                </div>
                <div className={style.description}>
                    <Typography variant='h5'>{profileInfo.name}</Typography>
                    <EditableSpan value={desc} onChange={setDesc}/>
                </div>
            </div>
        </>
    )
}