import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current?.value
    if (text) {
      props.updateTextPost(text)}
  }

  return (
     <div className={s.postsBlock}>
       <h3>My Posts</h3>
       <div>
         <div>
           <textarea ref={newPostElement}
                     onChange={onPostChange}
                     value={props.newPostText}
           />
         </div>
         <div>
           <button onClick={addPost}> Add post</button>
         </div>
       </div>
       <div className={s.posts}>
         {postsElement}
       </div>
     </div>
  )
}

export default MyPosts;