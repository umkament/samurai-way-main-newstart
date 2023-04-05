import React, {useEffect} from 'react';
import Profile from "./Profile";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getProfile, ProfileType} from "../../redux/profilePage-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapDispatchPropsType = {
  getProfile: (userId: string)=>void

}
type MapStatePropsType = {
  profile: ProfileType | null
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
  }, [])
    return (
         <Profile profile={props.profile}
                  getProfile={props.getProfile}
                 // isAuth={props.isAuth}
         />
    )
}


let mapStateToProps = (state: AppRootStateType): MapStatePropsType  => ({
  profile: state.profilePage.profile,
  //isAuth: state.auth.isAuth
})


//export default withAuthRedirect (withRouter(connect (mapStateToProps, {getProfile})(ProfileContainer)));

export default compose<React.ComponentType>(
   connect (mapStateToProps, {getProfile}),
   withRouter,
withAuthRedirect
   )(ProfileContainer)