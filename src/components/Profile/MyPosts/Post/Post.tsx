import React from 'react';
import s from './Post.module.css'

export type PostsType = {
  id: number
  message: string
  likesCount: number
}

type PostPropsType ={
  message: string
  likesCount: number
}

const Post = (props: PostPropsType) => {
  return (
     <div className={s.item}>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_fpPmbK-bebEeX036y7frmW06amtCkG1ew&usqp=CAU'/>
       {props.message}
       <div>
         <span>like {props.likesCount}</span>
       </div>
     </div>

  )
}

export default Post;