export const actionTypes = {
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET-USERS',
    SET_CURRENT_PAGE: 'SET-CURRENT-PAGE',
    SET_TOTAL_USERS_COUNT: 'SET-TOTAL-USERS-COUNT',
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

export const setCurrentPageActionCreate = (currentPage) => dispatch => { 
    dispatch({type: actionTypes.SET_CURRENT_PAGE, currentPage}) 
};

export const setTotalUsersActionCreate = (count) => dispatch => { 
    dispatch({type: actionTypes.SET_TOTAL_USERS_COUNT, count}) 
};