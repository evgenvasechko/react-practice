import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "../reducers/dialogs-reducer";
import profileReducer from "../reducers/profile-reducer";
import usersReducer from "../reducers/users-reducer";
import newsReducer from "../reducers/news-reducer";
import thunk from "redux-thunk";
import { applyMiddleware } from 'redux';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    newsPage: newsReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;