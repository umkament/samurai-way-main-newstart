import {combineReducers, createStore} from "redux";
import {DialogsType, messagesReducer, MessagesType, sendMessageAC, updateMessageBodyAC} from "./messagePage-reducer";
import {addPostAC, profileReducer, setUserProfile, updateTextPostAC} from "./profilePage-reducer";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
  usersReducer
} from "./users-reducer";

export type PostsType = {
  id: number
  message: string
  likesCount: number
}
export type profilePageType = {
  posts: Array<PostsType>
  newPostText: string
}

export type messagesPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newMessageBody: string
}



let rootReducer = combineReducers({
  messagesPage: messagesReducer,
  profilePage: profileReducer,
  users: usersReducer
})


export let store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;


export type ActionType = ReturnType<typeof addPostAC> |
   ReturnType<typeof updateTextPostAC> |
   ReturnType<typeof updateMessageBodyAC> |
   ReturnType<typeof sendMessageAC> |
   ReturnType<typeof follow> |
   ReturnType<typeof unfollow> |
   ReturnType<typeof setUsers> |
   ReturnType<typeof setCurrentPage> |
   ReturnType<typeof setTotalUsersCount>|
   ReturnType<typeof toggleIsFetching>|
   ReturnType<typeof setUserProfile>