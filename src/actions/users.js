export const actionTypes = {
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET-USERS',
};

export const followActionCreate = (userId) => dispatch => { 
    dispatch({type: actionTypes.FOLLOW, userId}) 
};

export const unfollowActionCreate = (userId) => dispatch => { 
    dispatch({type: actionTypes.UNFOLLOW, userId}) 
};

export const setUsersActionCreate = (usersData) => dispatch => { 
    dispatch({type: actionTypes.SET_USERS, usersData}) 
};