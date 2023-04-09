import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {messagesReducer, sendMessageAC} from "./messagePage-reducer";
import {addPostAC, profileReducer, setStatusProfileAC, setUserProfile} from "./profilePage-reducer";
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
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'


//когда комбайним редьюсеРЫ, на выходе получается ОДИН рутовый редьюсеР (rootReducer)
let rootReducer = combineReducers({
  messagesPage: messagesReducer,
  profilePage: profileReducer,
  users: usersReducer,
  auth: authReducer,
  form: formReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


//export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>



export type ActionType = ReturnType<typeof addPostAC>
   | ReturnType<typeof sendMessageAC>
   | ReturnType<typeof follow>
   | ReturnType<typeof unfollow>
   | ReturnType<typeof setUsers>
   | ReturnType<typeof setCurrentPage>
   | ReturnType<typeof setTotalUsersCount>
   | ReturnType<typeof toggleIsFetching>
   | ReturnType<typeof setUserProfile>
   | ReturnType<typeof setAuthUserData>
   | ReturnType<typeof toggleIsFollowingProgress>
   | ReturnType<typeof setStatusProfileAC>



// @ts-ignore
window.store = store;