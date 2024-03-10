import { actionTypes } from "../actions/news";

let initialState = {
    newsData: [
        {
            id: 1,
            title: 'Lorem Ipsum',
            shortDesc: 'Lorem ipsum dolor sit amet...',
            longDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eligendi iusto officiis placeat quibusdam voluptate? Culpa cumque error eum explicabo id, nihil nisi, placeat quia quibusdam, recusandae reiciendis soluta vitae?',
            headPhoto: '',
            likes: 0,
        },
        {
            id: 2,
            title: 'Lorem Ipsum2',
            shortDesc: '3Lorem ipsum dolor sit amet...',
            longDescription: '4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eligendi iusto officiis placeat quibusdam voluptate? Culpa cumque error eum explicabo id, nihil nisi, placeat quia quibusdam, recusandae reiciendis soluta vitae?',
            headPhoto: 'https://wallpapers.com/images/featured/pretty-essvpmmgzzs4ja3b.jpg',
            likes: 4,
        },
    ],
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_NEWS:
            return {...state, newsData: action.newsData}
        default: return state;
    };
};

export default newsReducer;