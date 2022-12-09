import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Link} from "@mui/material";

export default function FamilyCard() {
    return (
        <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                image="https://sun9-14.userapi.com/impg/PnwKU2IJyCAhWutgnGdsNkbEO12eb4PoH6k2Xw/LgPPmy5VDnY.jpg?size=1200x1600&quality=96&sign=39855aaa394c613681e51f7c2e3d72ab&type=album"
            />
            <CardContent sx={{bgcolor:'#40444B'}}>
                <Typography sx={{color:'#FEFEFE'}} gutterBottom variant="h5" component="div">
                    Tatayev's family
                </Typography>
                <Typography sx={{color:'#FEFEFE'}} variant="body2" color="text.secondary">
                    Hello we are first family in the FamilyTalk
                </Typography>
            </CardContent>
            <CardActions sx={{bgcolor:'#202225'}}>
                <Link href="/sign-up-user">ADD FAMILY MEMBER</Link>
                {/*<Button size="small" onClick={}>ADD FAMILY MEMBER</Button>*/}
                {/*<Button size="small">DELETE MEMBER</Button>*/}
            </CardActions>
        </Card>
    );
}