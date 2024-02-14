import React from "react";
import styles from "./dialog-senders.module.scss"
import { NavLink } from "react-router-dom"
import Ava from '../../../images/images2.jpg'

const DialogSenders = (props) => {
    return (
        <div className={styles.sender}>
            <NavLink to={"/dialogs/" + props.id} className = { dialogs => dialogs.isActive ? styles.active : styles.dialogs__item }>
                <img className={styles.sender__ava} src={Ava} alt="Ava" />
                <div>{props.name}</div>
            </NavLink>
        </div>
    )
}

export default DialogSenders;