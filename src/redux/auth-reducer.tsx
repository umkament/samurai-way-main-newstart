import {ActionType, AppThunk} from "./redux-store";
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
  ...action.payload,
  isAuth: true
}
    default:
      return state
  }
}

export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => (
   {type: 'SET-AUTH-USER-DATA', payload: {id, email, login, isAuth}} as const)


export const getAuthUserData = () => {
  return (dispatch: Dispatch) => {
    authAPI.getAuth().then(data => {
      if (data.resultCode === 0) {
        let {id, email, login, isAuth} = data.data
        dispatch(setAuthUserData(id, email, login, true))
      }

    })
  }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk=> (dispatch)=>{
  authAPI.postLogin(email, password, rememberMe)
     .then (res => {
       if (res.data.resultCode === 0) {
         dispatch(getAuthUserData())
       }
     })
}

/*
export const logoutTC = (): AppThunk => (dispatch)=>{
  authAPI.logOut()
     .then (res => {
       if (res.data.resultCode === 0) {
         dispatch(getAuthUserData(null, null, null, false))
       }
     })
}*/
