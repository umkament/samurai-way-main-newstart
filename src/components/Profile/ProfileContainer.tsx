import React, {useEffect} from 'react';
import Profile from "./Profile";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getProfile, ProfileType} from "../../redux/profilePage-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type MapDispatchPropsType = {
  getProfile: (userId: string)=>void
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
   props.getProfile(userId)
  }, [])
    return (
         <Profile profile={props.profile}
                  getProfile={props.getProfile}
         />
    )
}


let mapStateToProps = (state: AppRootStateType): MapStatePropsType  => ({
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {getProfile})(WithUrlDataContainerComponent);
