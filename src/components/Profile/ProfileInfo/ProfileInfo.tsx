import React from "react";
import style from './ProfileInfo.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";


export const ProfileInfo = () => {
    const profileInfo = useSelector<AppStateType,any>(state => state.profilePage.user)
    return (
        <>
            <div className={style.wallpaper}>
                <img
                    src={profileInfo.wallPaper}
                    alt="wallpaper"/>

            </div>
            <div className={style.profile}>
                <div className={style.avatar}>
                    <img src={profileInfo.photo} alt={'avatar'}/>
                </div>
                <div className={style.description}>
                    {/*{profileInfo.description}*/}
                    Hello i am future frontend developer
                </div>
            </div>
        </>
    )
}