const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
        
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessageText) {
                return {
                    ...state,
                    messagesData: [...state.messagesData, {id: state.messagesData.length, message: state.newMessageText}],
                    newMessageText: ''
                }
            }
            return state;
        case UPDATE_MESSAGE:
            return {
                ...state,
                newMessageText: action.newMessage
            };
        default: return state;
    }
}

export const addMessageActionCreate = () => ({type: ADD_MESSAGE});
export const changeMessageActionCreate = (text) => ({type: UPDATE_MESSAGE, newMessage: text});

export default dialogsReducer;