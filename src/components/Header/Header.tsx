import React from 'react';
import style from './Header.module.css'
import img from '../talk (1) (1).png'

type HeaderPropsType = {
    imgSrc:string
}
export const Header = (props: HeaderPropsType) => {
    return (
        <header className={style.header}><img className={style.img} src={img} alt="FamilyTalk Logo"/></header>
    );
};

