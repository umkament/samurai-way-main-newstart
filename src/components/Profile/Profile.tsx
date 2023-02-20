import React from 'react';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/profilePage-reducer";


type ProfilePropsType = {
  profile: ProfileType | null
  setUserProfile: (profile: ProfileType | null )=>void
}

const Profile: React.FC<ProfilePropsType> = (props) => {

  return (
     <div>
       <ProfileInfo profile={props.profile}/>

       <MyPostsContainer/>
       <MyPostsContainer/>
     </div>
  )
}

export default Profile;