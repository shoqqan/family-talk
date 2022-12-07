import React from "react";
import style from './ProfileInfo.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {UserType} from "../../../redux/reducers/profileReducer";


export const ProfileInfo = () => {
    const profileInfo = useSelector<AppStateType,UserType>(state => state.profilePage.user)
    return (
        <>
            <div className={style.wallpaper}>
                <img
                    src={profileInfo.profileWallpaper}
                    alt="wallpaper"/>

            </div>
            <div className={style.profile}>
                <div className={style.avatar}>
                    <img src={profileInfo.avatar} alt={'avatar'}/>
                </div>
                <div className={style.description}>
                    {profileInfo.description}
                </div>
            </div>
        </>
    )
}