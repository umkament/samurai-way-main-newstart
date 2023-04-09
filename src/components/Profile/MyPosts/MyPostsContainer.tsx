import React from 'react';
import {addPostAC} from "../../../redux/profilePage-reducer";
import {MyPosts} from "./MyPosts";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {PostsType} from "./Post/Post";

type MapStatePropsType = {
  posts: Array<PostsType>
  newPostText: string
}

type MapDispatchPropsType = {
  addPost: (newPostText: string) => void
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType


let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostAC(newPostText))
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);