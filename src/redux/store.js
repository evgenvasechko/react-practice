import dialogsReducer from "../reducers/dialogs-reducer";
import profileReducer from "../reducers/profile-reducer";

let store = {
    _state: {
        dialogsPage: {
        
            dialogsData: [
                {
                    id: 1,
                    name: 'John Doe'
                },
                {
                    id: 2,
                    name: 'Jane Haas'
                },
                {
                    id: 3,
                    name: 'Lewis Hamilton'
                },
                {
                    id: 4,
                    name: 'Toto Wolf'
                },
                {
                    id: 5,
                    name: 'Merlin Manson'
                },
                {
                    id: 6,
                    name: 'What Are'
                }
            ],
            
            messagesData: [
                {
                    id: 1,
                    message: 'Hey!',
                },
                {
                    id: 2,
                    message: 'How u doing?',
                },
                {
                    id: 3,
                    message: 'Where you disappear?',
                },
                {
                    id: 4,
                    message: 'Its a bad joke, man..',
                },
                {
                    id: 5,
                    message: 'I`m serious, you make me afraid',
                }
            ],
            newMessageText: '',
        },
        
        profilePage: {
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
                },
            ],
            newPostText: ''
        },
    },
    _callSubscriber() {},
    getState() { return this._state },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber(this._state);
    }
    
};




export default store;
window.store = store;