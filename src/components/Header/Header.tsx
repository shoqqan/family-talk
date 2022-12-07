import React from 'react';
import style from './Header.module.css'
type HeaderPropsType = {
    imgSrc:string
}
export const Header = (props: HeaderPropsType) => {
    return (
        <header className={style.header}><img src={props.imgSrc} alt="FamilyTalk Logo"/></header>
    );
};

