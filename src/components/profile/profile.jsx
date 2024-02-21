import React from "react";
import { addPostActionCreate as addPost, changePostActionCreate as changingPost } from "../actions/profile";
import { connect } from "react-redux";
import styles from "./profile.module.scss";
import Post from "./profileWall/profilePost/post";

const Profile = (props) => {
    const addPost = () => {
        props.addPost()
    };

    const changingPost = (e) => {
        let body = e.target.value;
        props.changingPost(body)
    };

    const postsArr = props.posts.map((elem) => {
        return <Post id={elem.id} likes={elem.likes} text={elem.text} name={elem.name} />
    });

    return(
        <main className={styles.profile}>
            <div className={styles.profile__hero}></div>
            <div className={styles.profile__info}>
                <div className={styles.profile__avatar}></div>
                <div className={styles.profile__name}>Hella Blackderville</div>
            </div>
            <div className={styles.profile__addPost}>
                <textarea value={props.newPostText}
                          onChange={changingPost}
                          name="addPost"
                          id="addPost"
                          className={styles.profile__postText}
                          cols="50"
                          rows="3"
                />
                <button className={styles.profile__addBtn} onClick={addPost}>Add Post</button>
            </div>
            {postsArr}
        </main>
    )
}

const mapStateToProps = (state) => ({
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = ({
    addPost,
    changingPost,
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
