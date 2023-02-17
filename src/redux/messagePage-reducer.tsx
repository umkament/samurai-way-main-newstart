import {ActionType} from "./redux-store";

export type DialogsType = {
  id: number,
  name: string
}
export type MessagesType = {
  id: number,
  message: string
}
/*
export type InitialStateType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newMessageBody: string
}*/
export type InitialStateMessageType = typeof initialState

let initialState = {
  dialogs: [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Viktor'},
    {id: 3, name: 'Petia'},
    {id: 4, name: 'Valera'},
    {id: 5, name: 'Andrey'},
    {id: 6, name: 'Chris'},
  ] as Array<DialogsType>,
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Fine'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Hello World'}
  ] as Array<MessagesType>,
  newMessageBody: ''
}

export const messagesReducer = (state: InitialStateMessageType = initialState, action: ActionType): InitialStateMessageType => {
  switch (action.type) {
    case 'UPDATE-MESSAGE-BODY':
      return  {
        ...state,
        newMessageBody: action.textOfMessage
      }
    case 'SEND-MESSAGE':
      let textOfMessage = state.newMessageBody
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 6, message: textOfMessage}]
      }
    default:
      return state
  }
}

export const updateMessageBodyAC = (textOfMessage: string) =>
   ({type: "UPDATE-MESSAGE-BODY", textOfMessage: textOfMessage} as const)

export const sendMessageAC = () => ({type: "SEND-MESSAGE"} as const)