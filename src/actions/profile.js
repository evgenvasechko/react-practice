export const actionTypes = {
    ADD_POST: "ADD-POST",
    UPDATE_POST: "UPDATE-POST",
    LIKE_POST: "LIKE-POST",
};

export const changePostActionCreate = (text) => dispatch => {
    dispatch({type: actionTypes.UPDATE_POST, newText: text});
};

export const addPostActionCreate = () => dispatch => {
    dispatch({type: actionTypes.ADD_POST});
};

export const likePostActionCreate = (id) => dispatch => {
    dispatch({type: actionTypes.LIKE_POST, id: id});
}
