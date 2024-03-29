import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";

type MapSateToPropsType = {
  isAuth: boolean
}
const mapStateToProps = (state: AppRootStateType): MapSateToPropsType => {
  return {
    isAuth: state.auth.isAuth
  }
}


export function withAuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: MapSateToPropsType) => {
    let {isAuth, ...restProps} = props
    if (!isAuth) return <Redirect to={'/login'}/>
    return <Component {...restProps as T}/>
  }


  return connect(mapStateToProps)(RedirectComponent)
}