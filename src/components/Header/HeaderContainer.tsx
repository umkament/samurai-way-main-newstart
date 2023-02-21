import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<AuthPropsType> {

  componentDidMount() {
   this.props.getAuthUserData()
  }

  render() {
    return (
       <Header {...this.props}/>
    )
  }
}

type MapStatePropsType = {
  isAuth: boolean
  login: string | null
}
type MapDispatchPropsType = {
  getAuthUserData: ()=>void
}
export type AuthPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);