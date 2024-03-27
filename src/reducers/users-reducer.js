import { actionTypes } from "../actions/users";

let initialState = {
    usersData: [],
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 1, 
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FOLLOW:
            return {
                ...state, 
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case actionTypes.UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case actionTypes.SET_USERS:
            return {...state, usersData: action.usersData};
        case actionTypes.SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case actionTypes.SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count};
        default: return state;
    }
}

export default usersReducer;