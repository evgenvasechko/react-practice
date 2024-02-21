export const actionTypes = {
    ADD_POST: "ADD-POST",
    UPDATE_POST: "UPDATE-POST"
};

export const changePostActionCreate = (text) => dispatch => {
    dispatch({type: actionTypes.UPDATE_POST, newText: text});
};

export const addPostActionCreate = () => dispatch => {
    dispatch({type: actionTypes.ADD_POST});
};
