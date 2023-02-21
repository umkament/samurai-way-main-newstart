import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
 followTC,
  getUsers,
  unfollowTC,
  UserType
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import {Preloader} from "../common/Preloader";


class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageClick = (pageNumber: number) => {

    this.props.getUsers(pageNumber, this.props.pageSize)
   /* this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)

    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items)
    })*/
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalCount={this.props.totalCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageClick={this.onPageClick}
             usersPage={this.props.usersPage}
             followingInProgress={this.props.followingInProgress}
             followTC={this.props.followTC}
             unfollowTC={this.props.unfollowTC}
      />
    </>
  }
}

type MapStatePropsType = {
  usersPage: Array<UserType>,
  pageSize: number,
  totalCount: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgress: number[]
}

type MapDispatchPropsType = {
  getUsers: (currentPage: number, pageSize: number)=>void
  followTC: (userId: number)=>void
  unfollowTC: (userId: number)=>void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    usersPage: state.users.users,
    pageSize: state.users.pageSize,
    totalCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    followingInProgress: state.users.followingInProgress
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

export default connect(mapStateToProps, {getUsers, followTC, unfollowTC
   }
)(UsersContainer)