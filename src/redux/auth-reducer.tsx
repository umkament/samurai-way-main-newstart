import {ActionType} from "./redux-store";
import React from "react";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type InitialStateAuthType = typeof initialState

type AuthType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
  isAuth: false
}

export const authReducer = (state: InitialStateAuthType = initialState, action: ActionType): InitialStateAuthType => {
  switch (action.type) {
    case 'SET-AUTH-USER-DATA':
return {
  ...state,
  ...action.data,
  isAuth: true
}
    default:
      return state
  }
}

export const setAuthUserData = (id: number, email: string, login: string) => (
   {type: 'SET-AUTH-USER-DATA', data: {id, email, login}} as const)


export const getAuthUserData = () => {
  return (dispatch: Dispatch) => {
    authAPI.getAuth().then(data => {
      if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login))
      }

    })
  }
}
