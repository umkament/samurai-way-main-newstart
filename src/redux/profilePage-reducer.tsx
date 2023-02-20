import {ActionType} from "./redux-store";
import {PostsType} from "../components/Profile/MyPosts/Post/Post";
import React from "react";

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
  userId: number
  photos: PhotosType
}
export type ProfilePageType = {
  posts: Array<PostsType>
  newPostText: string
  profile: ProfileType | null
}

let initialState: ProfilePageType = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 0},
    {id: 2, message: 'It\'s my first post', likesCount: 16}
  ] as Array<PostsType>,
  newPostText: "it-kamasutra.com",
  profile: null
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
    default:
      return state
  }
}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateTextPostAC = (textOfPost: string) => ({type: "UPDATE-TEXT-POST", textOfPost} as const)
export const setUserProfile = (profile: ProfileType | null) => ({type: "SET-USER-PROFILE", profile} as const)