import React from "react";
import styles from "./dialogs.module.scss"
import DialogMessageWrite from "./dialog-write-message/dialog-write-message";
import DialogSenders from "./dialogs-senders/dialog-senders";
import DialogMessages from "./dialogs-messages/dialog-messages";
import { connect } from "react-redux";


const Dialogs = (props) => {
    const dialogsDataArr = props.dialogsPage.dialogsData.map((elem) => {
        return <DialogSenders id={elem.id} name={elem.name} />
    })
        
    const messagesDataArr = props.dialogsPage.messagesData.map((elem) => {
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

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};


export default connect(mapStateToProps)(Dialogs);