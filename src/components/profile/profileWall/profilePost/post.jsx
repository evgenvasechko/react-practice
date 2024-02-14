import React from "react";
import styles from './post.module.scss'
import Path from '../../../../images/images4.jpg'

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.post__info}>
                <img className={styles.post__ava} src={Path} alt="Ava" />
                <div className={styles.post__author}>{props.name}</div>
            </div>
            <div className={styles.post__text}>{props.text}</div>
            <div className={styles.post__likes}>Likes: {props.likes}</div>
        </div>
    )
}




export default Post