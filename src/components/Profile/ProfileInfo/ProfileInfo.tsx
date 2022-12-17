import React, {ChangeEvent, useState} from "react";
import style from './ProfileInfo.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {EditableSpan} from "../../EditableSpan/EditableSpan";


export const ProfileInfo = () => {
    const profileInfo = useSelector<AppStateType, any>(state => state.profilePage.user)
    const [desc,setDesc] = useState('Hello i am future frontend developer')
    const onChangeDescription = (e:ChangeEvent<HTMLInputElement>) =>{

    }
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
                    <EditableSpan value={desc} onChange={setDesc}/>
                </div>
            </div>
        </>
    )
}