import React from "react";
import { connect } from "react-redux";
import { followActionCreate, unfollowActionCreate, setUsersActionCreate } from "../../redux/users-reducer";
import Users from './users'

const mapStateToProps = (state) => {
    return {users: state.usersPage.usersData};
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreate(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreate(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreate(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);