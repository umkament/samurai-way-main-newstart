import React from 'react';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/profilePage-reducer";


type ProfilePropsType = {
  profile: ProfileType | null
  getProfile: (userId: string)=>void
  //isAuth: boolean
}

const Profile: React.FC<ProfilePropsType> = (props) => {
  debugger
  //if (!props.isAuth) return <Redirect to={'/login'}/>
  return (
     <div>
       <ProfileInfo profile={props.profile}/>
       <MyPostsContainer/>
       <MyPostsContainer/>
     </div>
  )
}

export default Profile;