import React from 'react';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType={

}

const Profile: React.FC<ProfilePropsType> = (props) => {

  return (
     <div>
       <ProfileInfo/>

       <MyPostsContainer/>
       <MyPostsContainer/>
     </div>
  )
}

export default Profile;