import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import profilestyle from "./Profile.module.css"
import {ProfilePosts} from "./ProfilePostsContainer/ProfilePosts";

export const Profile = () => {

    return (
        <div className={profilestyle.content}>
            <ProfileInfo/>
            <ProfilePosts/>
        </div>
    )
}
