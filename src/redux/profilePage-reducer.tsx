import {ActionType, PostsType} from "./redux-store";

export type InitialStateProfileType = typeof initialState

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 0},
    {id: 2, message: 'It\'s my first post', likesCount: 16},
  ],
  newPostText: "it-kamasutra.com",
  profile: null
}


export const profileReducer = (state: InitialStateProfileType = initialState, action: ActionType): InitialStateProfileType=> {
  switch (action.type) {
    case 'ADD-POST':
      let newPost: PostsType = {
        id: 3,
        message: state.newPostText,
        likesCount: 0
      }
      return  {
        ...state,
        posts:[...state.posts, newPost],
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
export const setUserProfile = (profile: null) => ({type: "SET-USER-PROFILE", profile} as const)