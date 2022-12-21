import {
    createPostTC,
    getFamilySpaceTC,
    getPostsTC,
    PostType,
    UserType
} from "../../../../../redux/reducers/profileReducer";
import profilestyle from './ProfilePosts.module.css'
import {Post} from "./Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../../redux/store";
import * as React from "react";
import {useEffect, useState} from "react";
import {Button, Collapse, Grid, IconButton, IconButtonProps, Paper, TextField} from "@mui/material";
import FamilyCard from "./FamilyCard/FamilyCard";
import {useFormik} from "formik";
import {universalValidator} from "../../../../SignUpFamily/SignUpFamily";
import Typography from "@mui/joy/Typography";
import {FileUploadInput} from "../../../../../components/FileUploadInput/FileUploadInput";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from "@emotion/styled";
import {EmptyPlaceholeder} from "../../News/News";
import {useTranslation} from "react-i18next";

export const ProfilePosts = () => {
    const [base64, setBase64] = useState<string>();
    const [expand, setExpand] = useState(false);

    const posts = useSelector<AppStateType, PostType[]>(state => state.profilePage.posts)
    const user = useSelector<AppStateType, UserType>(state => state.profilePage.user)
    const dispatch = useDispatch<any>()
    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            title: '',
            content: '',
        },
        validate: universalValidator(['content']),
        onSubmit: ({title, content}) => {
            dispatch(createPostTC(title, content, base64))
            setExpand(false)
            formik.resetForm();
        },
    });

    useEffect(() => {
        dispatch(getPostsTC())
        dispatch(getFamilySpaceTC())

    }, [])

    return (
        <div className={profilestyle.content}>
            <Grid container display='flex' justifyContent={'space-between'} columnSpacing={2}>
                <Grid>
                    <div>
                        <div>
                            <form onSubmit={formik.handleSubmit}>
                                <Paper
                                    className={profilestyle.paper}
                                    sx={{
                                        p: '2px 4px',
                                        bgcolor: '#40444B',
                                    }}
                                >
                                    <CardActions>
                                        <span style={{color: 'white', fontSize: '18px'}}>{t('PROFILE.POST_TITLE')}</span>
                                        <ExpandMore
                                            expand={expand}
                                            onClick={() => {
                                                setExpand(!expand)
                                            }}
                                            aria-expanded={true}
                                            aria-label="show more"
                                        >
                                        <ExpandMoreIcon/>
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expand}>
                                        <Paper
                                            sx={{
                                                bgcolor: '#40444B',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                        <TextField
                                            style={{paddingBottom: '1rem'}}
                                            value={formik.values.title}
                                            onChange={formik.handleChange}
                                            name="title"
                                            type="text"
                                            placeholder="Title of post"
                                            label="Title"
                                            error={formik.touched.title && Boolean(formik.errors.title)}
                                            helperText={formik.touched.title && formik.errors.title}
                                        />
                                        <TextField
                                            value={formik.values.content}
                                            onChange={formik.handleChange}
                                            style={{paddingBottom: '1rem'}}
                                            name="content"
                                            type="text"
                                            placeholder="Content of post"
                                            label="Content"
                                            rows={3}
                                            multiline
                                            error={formik.touched.content && Boolean(formik.errors.content)}
                                            helperText={formik.touched.content && formik.errors.content}
                                        />

                                        <Typography
                                            endDecorator={<FileUploadInput setBase64={setBase64}/>}
                                            fontSize="sm"
                                            sx={{alignSelf: 'center', paddingBottom: '1rem'}}
                                        >
                                            Posts photo:
                                        </Typography>


                                        <div className={profilestyle.flex}>
                                            <IconButton color="primary" sx={{p: '10px', width: '50px'}}
                                                        aria-label="directions">
                                                <Button variant="outlined" type="submit">+</Button>
                                            </IconButton>
                                        </div>
                                            </Paper>
                                    </Collapse>
                                </Paper>
                            </form>
                        </div>
                        <div className={profilestyle.posts}>
                            {<Posts posts={posts} user={user}/>}
                        </div>
                    </div>
                </Grid>
                <Grid>
                    <FamilyCard/>
                </Grid>
            </Grid>
        </div>
    )
}


type PostsPropsType = {
    posts: PostType[];
    user: { picture: string, name: string }
}
const Posts = ({posts, user}: PostsPropsType) => {
    return (
        <div>
            {Array.isArray(posts) ? posts.map((post) => {
                return (<Post

                    key={post.id}
                    id={post.id}
                    image={post.picture}
                    postText={post.title}
                    avatar={user.picture}
                    authorName={user.name}
                    time={post.createdAt}

                />)

            }) :  <EmptyPlaceholeder messages="You don't have yet any posts"/>}
        </div>
    );
};


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: "0.5s",
}));