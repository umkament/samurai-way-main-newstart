import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profilePage-reducer";
import axios from "axios";


class ProfileContainer extends React.Component<any, any> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`).then(responce => {
      this.props.setUserProfile(responce.data)
    })
  }
  render() {
    return (
       <div>
         <Profile {...this.props}/>
       </div>
    )
  }
}
type MapDispatchPropsType = {
  setUserProfile: (profile: null)=>void
}
type MapStatePropsType = {

}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType  => ({

})

export default connect (mapStateToProps, {setUserProfile})(ProfileContainer);