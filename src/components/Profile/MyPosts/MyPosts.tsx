import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataMyPostType = {
  newPostText: string
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  const addPost = (values: FormDataMyPostType) => {
    console.log(values)
    props.addPost(values.newPostText)
  }
  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
  let newPostElement = React.createRef<HTMLTextAreaElement>();


  return (
     <div className={s.postsBlock}>
       <h3>My Posts</h3>
      <MyPostReduxForm onSubmit={addPost}/>
       <div className={s.posts}>
         {postsElement}
       </div>
     </div>
  )
}

export const MyPostForm: React.FC<InjectedFormProps<FormDataMyPostType>> = (props) => {
  return(
     <form onSubmit={props.handleSubmit}>
       <div>
           <Field component={'textarea'}
                  name={'newPostText'}
                  placeholder={'start posting...'}
           />
       </div>
       <div>
         <button> Add post</button>
       </div>
     </form>
  )
}

const MyPostReduxForm = reduxForm<FormDataMyPostType>({form: 'myPost'})(MyPostForm)