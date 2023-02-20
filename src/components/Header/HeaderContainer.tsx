import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component<AuthPropsType> {

  componentDidMount() {
    authAPI.getAuth().then(data => {
      if (data.resultCode === 0) {
        let {id, email, login} = data.data
        this.props.setAuthUserData(id, email, login)
      }

    })
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
  setAuthUserData: (id: number, email: string, login: string) => void
}
export type AuthPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);