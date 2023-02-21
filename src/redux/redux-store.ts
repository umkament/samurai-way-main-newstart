import {applyMiddleware, combineReducers, createStore} from "redux";
import {messagesReducer, sendMessageAC, updateMessageBodyAC} from "./messagePage-reducer";
import {addPostAC, profileReducer, setUserProfile, updateTextPostAC} from "./profilePage-reducer";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching, toggleIsFollowingProgress,
  unfollow,
  usersReducer
} from "./users-reducer";
import {authReducer, setAuthUserData} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";



let rootReducer = combineReducers({
  messagesPage: messagesReducer,
  profilePage: profileReducer,
  users: usersReducer,
  auth: authReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

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
   ReturnType<typeof setTotalUsersCount> |
   ReturnType<typeof toggleIsFetching> |
   ReturnType<typeof setUserProfile> |
   ReturnType<typeof setAuthUserData> |
   ReturnType<typeof toggleIsFollowingProgress>