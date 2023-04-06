import {ActionType} from "./redux-store";
import {PostsType} from "../components/Profile/MyPosts/Post/Post";
import React from "react";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

//types
export type InitialStateProfileType = typeof initialState
export type ContactsType = {
  skype: string
  vk: string
  facebook: string
  icq: string
  email: string
  googlePlus: string
  twitter: string
  instagram: string
  whatsApp: string
}
export type PhotosType = {
  small: string
  large: string
}
export type ProfileType = {
  aboutMe: string,
  contacts: ContactsType,
  lookingForAJob: boolean,
  lookingForAJobDescription: string
  fullName: string
  userId: string
  photos: PhotosType
}
export type ProfilePageType = {
  posts: Array<PostsType>
  newPostText: string
  profile: ProfileType | null
  status: string
}


let initialState: ProfilePageType = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 0},
    {id: 2, message: 'It\'s my first post', likesCount: 16}
  ] as Array<PostsType>,
  newPostText: "it-kamasutra.com",
  profile: null,
  status: ''
}

export const profileReducer = (state: InitialStateProfileType = initialState, action: ActionType): InitialStateProfileType => {
  switch (action.type) {
    case 'ADD-POST':
      let newPost: PostsType = {
        id: 3,
        message: state.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    case 'UPDATE-TEXT-POST':
      return {
        ...state,
        newPostText: action.textOfPost
      }
    case "SET-USER-PROFILE":
      return {
        ...state,
        profile: action.profile
      }
    case "SET-STATUS-PROFILE":
      return {...state, status: action.status}
    default:
      return state
  }
}

//actions
export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateTextPostAC = (textOfPost: string) => ({type: "UPDATE-TEXT-POST", textOfPost} as const)
export const setUserProfile = (profile: ProfileType | null) => ({type: "SET-USER-PROFILE", profile} as const)
export const setStatusProfileAC = (status: string) => ({type: "SET-STATUS-PROFILE", status} as const)

//thunks
export const getProfile = (userId: string) => {
  return (dispatch: Dispatch) => {
    profileAPI.getUserProfile(userId)
       .then(res => {
         dispatch(setUserProfile(res.data))
       })
  }
}

/*
export const getStatusProfile = (userId: string) => {
  return (dispatch: Dispatch) => {
    profileAPI.getStatusProfile(userId)
       .then(res => {
         dispatch(setStatusProfileAC(res.data))
       })
  }
}

export const updateStatusProfile = (status: string) => {
  return (dispatch: Dispatch) => {
    profileAPI.updateStatusProfile(status)
       .then(res => {
         if(res.data.resultCode === 0) {
         dispatch(setStatusProfileAC(status))
       }})
}
}
*/
