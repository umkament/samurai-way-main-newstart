import React, {useEffect} from 'react';
import Profile from "./Profile";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getProfile,ProfileType} from "../../redux/profilePage-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


type MapDispatchPropsType = {
  getProfile: (userId: string)=>void
  //getStatusProfile: (userId: string)=>void
  //updateStatusProfile: (status: string)=>void

}
type MapStatePropsType = {
  profile: ProfileType | null
  status: string
 // isAuth: boolean
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
   // props.getStatusProfile(userId)

  }, [])
    return (
         <Profile profile={props.profile}
                  getProfile={props.getProfile}
                 // status={props.status}
                 // updateStatusProfile={props.updateStatusProfile}
                  //getStatusProfile={props.getStatusProfile}
                 // isAuth={props.isAuth}
         />
    )
}


let mapStateToProps = (state: AppRootStateType): MapStatePropsType  => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
  //isAuth: state.auth.isAuth
})


//export default withAuthRedirect (withRouter(connect (mapStateToProps, {getProfile})(ProfileContainer)));

export default compose<React.ComponentType>(
   connect (mapStateToProps, {getProfile}),
   withRouter,
//withAuthRedirect
   )(ProfileContainer)