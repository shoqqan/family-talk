import React, {ChangeEvent, useEffect, useState} from "react";
import style from './ProfileInfo.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {EditableSpan} from "../../EditableSpan/EditableSpan";


export const ProfileInfo = () => {
    const profileInfo = useSelector<AppStateType, any>(state => state.profilePage.user)
    const [desc,setDesc] = useState('')

    useEffect(()=>{
        setDesc(profileInfo.status)
    },[])
    console.log(profileInfo)
    return (
        <>
            <div className={style.wallpaper}>
                <img
                    src={'https://t3.ftcdn.net/jpg/02/84/69/52/360_F_284695228_Mk8bgUjv33bT1opqAu4fVAGftgbxUiqg.jpg'}
                    alt="wallpaper"/>

            </div>
            <div className={style.profile}>
                <div className={style.avatar}>
                    <img src={profileInfo.picture} alt={'avatar'}/>
                </div>
                <div className={style.description}>
                    <EditableSpan value={desc} onChange={setDesc}/>
                </div>
            </div>
        </>
    )
}