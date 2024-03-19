import React from "react";
import styles from './loading.module.scss'

const Loading = () => {
    return(
        <div className={styles.loadingWindow}>
            <div className={styles.ldsDualRing}></div>
        </div>
    )
}

export default Loading