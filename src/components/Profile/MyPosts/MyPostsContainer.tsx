import React from 'react';
import {addPostAC, updateTextPostAC} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {AppRootStateType, PostsType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type MapStatePropsType = {
  posts: Array<PostsType>
  newPostText: string
}

type MapDispatchPropsType = {
  updateTextPost: (textOfPost: string)=> void,
  addPost: ()=>void
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
    updateTextPost: (textOfPost: string) => {
      dispatch(updateTextPostAC(textOfPost))
    },
    addPost: ()=> {
      dispatch(addPostAC())
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);