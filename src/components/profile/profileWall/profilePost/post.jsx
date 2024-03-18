import React, { memo } from "react";
import styles from './post.module.scss';
import Path from '../../../../assets/images/images4.jpg';
import { likePostActionCreate as likePost } from "../../../../actions/profile";
import { connect } from "react-redux";

const Post = memo((props) => {
    const likePost = () => {
        props.likePost(props.id)
    };
    return (
        <div className={styles.post}>
            <div className={styles.post__info}>
                <img className={styles.post__ava} src={Path} alt="Ava" />
                <div className={styles.post__author}>{props.name}</div>
            </div>
            <div className={styles.post__text}>{props.text}</div>
            <div className={styles.post__likes}>Likes: {props.likes}</div>
            <button onClick={likePost}>Like</button>
        </div>
    )
})




const mapStateToProps = (state) => ({
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = ({
    likePost,
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
