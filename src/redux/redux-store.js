import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "../reducers/dialogs-reducer";
import profileReducer from "../reducers/profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;