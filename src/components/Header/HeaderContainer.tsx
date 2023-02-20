import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<AuthPropsType> {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    }).then(response => {
      if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
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