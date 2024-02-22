import { actionTypes } from "../actions/profile";

let initialState = {
    postsData: [
        {
            id: 1,
            name: 'Jane Doe',
            text: 'lorem ipsum dolor sit amet dagjkan adfgjfbnagp;jfbg agragjubrh [gaoirg[og',
            likes: 23
        },
        {
            id: 2,
            name: 'Sascha Grand',
            text: 'lorem ipsum dolor sit amet dagjkan adfgjfbnagp;jfbg [og',
            likes: 45
        },
        {
            id: 3,
            name: 'Mitch Cliff',
            text: 'lorem ipsum dolor sit amet  [gaoirg[og',
            likes: 11
        },
        {
            id: 4,
            name: 'Juan Pedro',
            text: 'Black lives matter!',
            likes: 3
        },
        {
            id: 5,
            name: 'Michael Jackson',
            text: 'Wooow!',
            likes: 6
        }
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_POST:
            if (state.newPostText) {
                return {
                    ...state,
                    postsData: [...state.postsData, {id: state.postsData.length, name: 'Hella Blackderville', text: state.newPostText, likes: 0 }],
                    newPostText: ''
                }
            }
            return state;
        case actionTypes.UPDATE_POST:
            return {
                ...state,
                newPostText: action.newText
            }
        default: return state;
    }
}

export default profileReducer;
