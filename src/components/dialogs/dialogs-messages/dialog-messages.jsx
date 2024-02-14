import React from "react";
import styles from "./dialog-messages.module.scss"

const DialogMessages = (props) => {
    return (
        <div className={styles.dialog__messages}>{props.message}</div>
    )
}

export default DialogMessages;