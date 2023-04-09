import React, {FC} from "react";
import styles from "./Users.module.css"
import userPhoto from "./../../assets/userPhoto.jpg copy.png"
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
  totalCount: number
  pageSize: number
  currentPage: number
  followingInProgress: number[]
  onPageClick: (pageNumber: number) => void
  usersPage: Array<UserType>
  followTC: (userId: number) => void
  unfollowTC: (userId: number) => void
}

const Users: FC<UsersPropsType> = (props) => {

  let pagesCount = Math.ceil(props.totalCount / props.pageSize);

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
     <div>
       <div>
         {pages.map(p => {
           // @ts-ignore
           return <span className={props.currentPage === p && styles.selectedPage}
                        onClick={() => {
                          props.onPageClick(p)
                        }}>{p}</span>
         })}
       </div>
       {
         props.usersPage.map(u =>
               <div key={u.id}>
<span>
  <div>
    <NavLink to={'/profile/' + u.id}>
    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
      </NavLink>
  </div>
  <div>
    {u.followed
       ?
       <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
         props.unfollowTC(u.id)

       }}>
         Unfollow</button>
       :
       <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
         props.followTC(u.id)
       }}>Follow</button>
    }
  </div>
</span>
                 <span>
             <span>
               <div>{u.name}</div>
               <div>{u.status}</div>
             </span>
             <span>
               <div>{"u.location.country"}</div>
               <div>{"u.location.city"}</div>
             </span>
           </span>
               </div>
         )
       }

     </div>
  )
}

export default Users;