import Profile from "./profile";
import { addPostActionCreate, changePostActionCreate } from "../../redux/profile-reducer"
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreate())
        },
        changingPost: (text) => {
            dispatch(changePostActionCreate(text))
        }
    }
}


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;