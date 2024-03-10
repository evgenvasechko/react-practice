export const actionTypes = {
    SET_NEWS: 'SET_NEWS',
};

export const setNewsActionCreate = (newsData) => dispatch => { 
    dispatch({type: actionTypes.SET_NEWS, newsData}) 
};