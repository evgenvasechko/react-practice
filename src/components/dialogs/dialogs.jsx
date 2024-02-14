import React from "react";
import styles from "./dialogs.module.scss"
import DialogMessageWrite from "./dialog-write-message/dialog-write-message";
import DialogSenders from "./dialogs-senders/dialog-senders";
import DialogMessages from "./dialogs-messages/dialog-messages";


const Dialogs = (props) => {
    let dialogsDataArr = props.dialogsPage.dialogsData.map((elem) => {
        return <DialogSenders id={elem.id} name={elem.name} />
    })
        
    let messagesDataArr = props.dialogsPage.messagesData.map((elem) => {
        return <DialogMessages message={elem.message}/>
    })
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs__list}>
                {dialogsDataArr} 
            </div>
            <div className={styles.messages__list}>
                {messagesDataArr}
                <DialogMessageWrite newMessage={props.dialogsPage.newMessageText} dispatch={props.dispatch}/>
            </div>
        </div>
    )
}

export default Dialogs;