import React, {useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profilePage-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type MapDispatchPropsType = {
  setUserProfile: (profile: ProfileType | null)=>void
}
type MapStatePropsType = {
  profile: ProfileType | null
}

type PathParamsType = {
  userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType



let ProfileContainer = (props: PropsType) => {
  useEffect( ()=> {
    let userId = props.match.params.userId;
    if (!userId) {
      userId = '2'
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
       .then(responce => {
         props.setUserProfile(responce.data)
    })
  }, [])
    return (
         <Profile profile={props.profile}
                  setUserProfile={props.setUserProfile}
         />
    )
}


let mapStateToProps = (state: AppRootStateType): MapStatePropsType  => ({
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
