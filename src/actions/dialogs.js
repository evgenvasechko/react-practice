export const actionTypes = {
    ADD_MESSAGE: 'ADD-MESSAGE',
    UPDATE_MESSAGE: 'UPDATE-MESSAGE',
};

export const addMessageActionCreate = () => dispatch => {
    dispatch({type: actionTypes.ADD_MESSAGE});
};

export const changeMessageActionCreate = (text) => dispatch => {
    dispatch({type: actionTypes.UPDATE_MESSAGE, newMessage: text});
};