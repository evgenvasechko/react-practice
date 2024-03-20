import React, { memo, useState, useEffect } from "react";
import styles from './post.module.scss';
import Path from '../../../../assets/images/images4.jpg';
import { likePostActionCreate as likePost } from "../../../../actions/profile";
import { connect } from "react-redux";
import likeIco from '../../../../assets/icons/like.svg'

const Post = memo((props) => {
    const [likes, setLikes] = useState(props.likes);
    const [liked, setLiked] = useState(props.liked);
    useEffect(() => {
        setLiked(!liked);
    }, [likes])
    return (
        <div className={styles.post}>
            <div className={styles.post__info}>
                <img className={styles.post__ava} src={Path} alt="Ava" />
                <div className={styles.post__author}>{props.name}</div>
            </div>
            <div className={styles.post__text}>{props.text}</div>
            <div className={styles.post__likes}>
                {likes}
                <img className={styles.post__likeIco} src={likeIco} onClick={() => setLikes(liked ? likes + 1 : likes - 1)}/>
            </div>
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
