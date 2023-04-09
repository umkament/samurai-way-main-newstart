import {ActionType} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type InitialStateUsersType = typeof initialState

type UserLocationType = {
  city: string,
  country: string
}
export type UserType = {
  id: number,
  photos: {
    small: string,
    large: string
  },
  followed: boolean,
  name: string,
  status: string,
  // location: UserLocationType
}

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 3,
  isFetching: false,
  followingInProgress: [] as number[]
}


export const usersReducer = (state: InitialStateUsersType = initialState, action: ActionType): InitialStateUsersType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u
        })
      }
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u
        })
      }
    case 'SET-USERS':
      return {
        ...state,
        users: action.users
      }
    case 'SET-CURRENT-PAGE':
      return {
        ...state,
        currentPage: action.currentPage
      }
    case 'SET-TOTAL-USERS-COUNT':
      return {
        ...state,
        totalUsersCount: action.totalCount
      }
    case 'TOGGLE-IS-FETCHING':
      return {
        ...state,
        isFetching: action.isFetching
      }
    case 'TOGGLE-IS-FOLLOWING-PROGRESS':
      return {
        ...state,
        followingInProgress: action.isFetching
           ? [...state.followingInProgress, action.userId]
           : state.followingInProgress.filter(id => id !== action.userId)
      }

    default:
      return state
  }
}

export const follow = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollow = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: "SET-USERS", users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
  type: 'SET-TOTAL-USERS-COUNT',
  totalCount: totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
  type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
  isFetching,
  userId
} as const)


export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setTotalUsersCount(data.totalCount))
      dispatch(setUsers(data.items))
    })
  }
}

export const followTC = (userId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    usersAPI.followUser(userId)
       .then(data => {
         if (data.resultCode === 0) {
           dispatch(follow(userId))
         }
         dispatch(toggleIsFollowingProgress(false, userId))
       })
  }
}
export const unfollowTC = (userId: number) => (dispatch: Dispatch) => {
  dispatch(toggleIsFollowingProgress(true, userId))
  usersAPI.unfollowUser(userId)
     .then(data => {
       if (data.resultCode === 0) {
         dispatch(unfollow(userId))
       }
       dispatch(toggleIsFollowingProgress(false, userId))
     })
}

