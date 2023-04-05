import React from 'react';
import {InitialStateMessageType, sendMessageAC, updateMessageBodyAC} from "../../redux/messagePage-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
  messagesPage: InitialStateMessageType
 // isAuth: boolean
}

type MapDispatchPropsType = {
  updateMessageBody: (textOfMessage: string)=> void,
  sendMessage: ()=>void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    messagesPage: state.messagesPage,
   // isAuth: state.auth.isAuth
  }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    updateMessageBody: (textOfMessage: string) => {
      dispatch(updateMessageBodyAC(textOfMessage))
    },
    sendMessage: ()=> {
      dispatch(sendMessageAC())
    }
  }
}


export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));



