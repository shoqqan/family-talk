import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState<string>(props.value);
    const userStatus = useSelector<AppStateType, string>(state => state.profilePage.user.status)
    const dispatch = useDispatch<any>()
    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        dispatch(title)
        props.onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ?
        <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} sx={{bgcolor: '#FEFEFE'}}/>
        : <div style={{display: 'flex', alignItems:'center', columnGap:10}}>
            <span>{props.value}</span>
            {/*<IconButton color="primary"onClick={activateEditMode}>*/}
            {/*    <ModeIcon/>*/}
            {/*</IconButton>*/}
        </div>
}
