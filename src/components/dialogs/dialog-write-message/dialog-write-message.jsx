import React from "react";
import styles from "./dialogs-write-message.module.scss";
import { connect } from "react-redux";
import { addMessageActionCreate as sendMessage, changeMessageActionCreate as writeMessage } from "./../../../actions/dialogs"

// let timer = null;
const DialogMessageWrite = (props) => {

    const sendMessage = () => {
        props.sendMessage();
    };

    const writeMessage = (e) => {
        let body = e.target.value;
        props.writeMessage(body);
    };

    // let debounce = (e) => {
    //     if (timer) {
    //         clearTimeout(timer);
    //     }
    //     console.log('1');
    //     timer = setTimeout(() => {
    //         writeMessage(e);
    //         timer = null;
    //         console.log('Hey there!');
    //     }, 0);
    // };

    return (
        <div className={styles.newText}>
            <textarea value={props.newMessage} onChange={writeMessage} className={styles.newText__write} cols="60" rows="2"></textarea>
            <button onClick={sendMessage} className={styles.newText__send}>Send</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

const mapDispatchToProps = ({
    sendMessage,
    writeMessage,
});


export default connect(mapStateToProps, mapDispatchToProps)(DialogMessageWrite);