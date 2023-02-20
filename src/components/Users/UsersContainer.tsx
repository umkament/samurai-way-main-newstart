import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
  follow,
  setCurrentPage, setTotalUsersCount,
  setUsers, toggleIsFetching,
  unfollow,
  UserType
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import {Preloader} from "../common/Preloader";

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(responce.data.items)
      this.props.setTotalUsersCount(responce.data.totalCount)
    })
  }

  onPageClick = (pageNumber: number) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(responce => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(responce.data.items)
    })
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalCount={this.props.totalCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageClick={this.onPageClick}
             usersPage={this.props.usersPage}
             unfollow={this.props.unfollow}
             follow={this.props.follow}
      />
    </>
  }
}

type MapStatePropsType = {
  usersPage: Array<UserType>,
  pageSize: number,
  totalCount: number,
  currentPage: number,
  isFetching: boolean
}

type MapDispatchPropsType = {
  follow: (userId: number) => void,
  unfollow: (userId: number) => void,
  setUsers: (users: Array<UserType>) => void,
  setCurrentPage: (pageNumber: number) => void,
  setTotalUsersCount: (totalUsersCount: number) => void,
  toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    usersPage: state.users.users,
    pageSize: state.users.pageSize,
    totalCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching
  }
}

/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    follow: (userId: number) => dispatch(followAC(userId)),
    unfollow: (userId: number) => dispatch(unfollowAC(userId)),
    setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
    setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
    setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCountAC(totalUsersCount)),
    toggleIsFetching: (isFetching: boolean) => dispatch(toggleIsFetchingAC(isFetching))
  }
}*/

export default connect(mapStateToProps, {
     follow,
     unfollow,
     setUsers,
     setCurrentPage,
     setTotalUsersCount,
     toggleIsFetching
   }
)(UsersContainer)