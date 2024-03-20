import { actionTypes } from "../actions/profile";

let initialState = {
    postsData: [
        {
            id: 1,
            name: 'Jane Doe',
            text: 'lorem ipsum dolor sit amet dagjkan adfgjfbnagp;jfbg agragjubrh [gaoirg[og',
            likes: 23,
            liked: false
        },
        {
            id: 2,
            name: 'Sascha Grand',
            text: 'lorem ipsum dolor sit amet dagjkan adfgjfbnagp;jfbg [og',
            likes: 45,
            liked: false
        },
        {
            id: 3,
            name: 'Mitch Cliff',
            text: 'lorem ipsum dolor sit amet  [gaoirg[og',
            likes: 11,
            liked: false
        },
        {
            id: 4,
            name: 'Juan Pedro',
            text: 'Black lives matter!',
            likes: 3,
            liked: false
        },
        {
            id: 5,
            name: 'Michael Jackson',
            text: 'Wooow!',
            likes: 6,
            liked: false
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
                    postsData: [...state.postsData, {id: state.postsData.length + 1, name: 'Hella Blackderville', text: state.newPostText, likes: 0 }],
                    newPostText: ''
                }
            }
            return state;
        case actionTypes.UPDATE_POST:
            return {
                ...state,
                newPostText: action.newText
            }
        case actionTypes.LIKE_POST:
            return {
                ...state,
                postsData: state.postsData.map(post => post.id === action.id ? { ...post, likes: post.likes += 1 } : post)
            }
        default: return state;
    }
}

export default profileReducer;
