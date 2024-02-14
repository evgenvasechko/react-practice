import React from "react";
import styles from './header.module.scss'
import Logo from '../../images/logo.png'

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img className={styles.header__logo} src={Logo} alt="logo" />
            <div className={styles.header__text}>Wheeeeeels</div>
        </header>
    )
}

export default Header;