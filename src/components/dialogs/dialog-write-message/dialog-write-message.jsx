import React from "react";
import styles from "./dialogs-write-message.module.scss";

import { addMessageActionCreate, changeMessageActionCreate } from "../../../redux/dialogs-reducer";

let timer = null;
const DialogMessageWrite = (props) => {

    

    let sendMessage = () => {
        props.dispatch(addMessageActionCreate());
    }

    let writeMessage = (e) => {
        let body = e.target.value;
        props.dispatch(changeMessageActionCreate(body));
    }

    let debounce = (e) => {
        if (timer) {
            clearTimeout(timer);
        }
        console.log('1');
        timer = setTimeout(() => {
            writeMessage(e);
            timer = null;
            console.log('Hey there!');
        }, 0);
    }

    return (
        <div className={styles.newText}>
            <textarea value={props.newMessage} onChange={writeMessage} className={styles.newText__write} cols="60" rows="2"></textarea>
            <button onClick={sendMessage} className={styles.newText__send}>Send</button>
        </div>
    )
}

export default DialogMessageWrite