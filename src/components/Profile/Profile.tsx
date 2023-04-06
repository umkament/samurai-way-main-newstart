import React from 'react';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/profilePage-reducer";


type ProfilePropsType = {
  profile: ProfileType | null
  getProfile: (userId: string) => void
  status: string
  updateStatusProfile: (userId: string) => void
  //getStatusProfile: (userId: string)=>void
  //isAuth: boolean
}

const Profile: React.FC<ProfilePropsType> = (props) => {

  //if (!props.isAuth) return <Redirect to={'/login'}/>
  return (
     <div>
       <ProfileInfo profile={props.profile}
                   status={props.status}
                   updateStatusProfile={props.updateStatusProfile}
       />
       <MyPostsContainer/>
       <MyPostsContainer/>
     </div>
  )
}

export default Profile;