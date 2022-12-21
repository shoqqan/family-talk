import * as React from 'react';
import {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button} from "@mui/material";
import {Avatar, AvatarGroup} from "@mui/joy";
import {ROUTES} from "../../../../../../helpers/roates";
import {replaceWithReload} from "../../../../../../helpers/replaceWithReload";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../../../redux/store";
import {FamilySpaceType, getFamilySpaceTC} from "../../../../../../redux/reducers/profileReducer";
import {EditableSpan} from "../../../../../../components/EditableSpan/EditableSpan";
import s from './FamilyCard.module.css';
import {useTranslation} from "react-i18next";

export default function FamilyCard() {
    const family = useSelector<AppStateType, FamilySpaceType>(state => state.profilePage.familySpace)
    const userId = useSelector<AppStateType, number>(state => state.profilePage.user.id)
    const {t} = useTranslation();

    const [famName, setFamName] = useState('')
    const [famDesc, setFamDesc] = useState('')

    useEffect(() => {
        getFamilySpaceTC()
        setFamName(family.title)
        setFamDesc(family.status)
    }, [family.title, family.status])

    return (
        <Card className={s.cards} sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#202225'}}>
            <CardMedia
                component="img"
                alt="Family picture"
                height="30"
                image={family.picture || 'https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-family-icon-design-template-vector-illustration-png-image_710428.jpg'}
                sx={{height: '50px'}}
            />
            <CardContent sx={{bgcolor: '#40444B'}}>
                <Typography sx={{color: '#FEFEFE'}} gutterBottom variant="h5" component="div">
                    <EditableSpan value={famName} onChange={setFamName}/>
                </Typography>
                <Typography sx={{color: '#FEFEFE'}} variant="body2" color="text.secondary">
                    <EditableSpan value={famDesc} onChange={setFamDesc}/>
                </Typography>
            </CardContent>
            <CardActions sx={{}}>
                <Button onClick={() => {
                    replaceWithReload(ROUTES.SIGN_UP_USER)
                }}>{t('PROFILE.ADD_FAMILY_MEMBER')}</Button>
            </CardActions>
            <AvatarGroup sx={{flexBasis: '10rem', color: '#FEFEFE', justifyContent: 'space-evenly', overflow: 'hidden'}}>
                {
                    family.members.filter((m) => {
                        return  m.id !== userId
                    }).map((m) => {
                        return <div className={s.avatar}>
                            <Avatar key={m.id} src={m.picture} sx={{width: 40, height: 40}}/>
                            <span>{m.name}</span>
                        </div>
                    })
                }
            </AvatarGroup>
        </Card>
    );
}