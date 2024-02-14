import React from "react";
import styles from './navbar.module.scss'
import { NavLink } from "react-router-dom"

const Nav = (props) => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__list}>
                <li className={styles.navbar__item}><NavLink to="/profile" className = { navbar => navbar.isActive ? styles.active : styles.navbar__item }>My Page</NavLink></li>
                <li className={styles.navbar__item}><NavLink to="/dialogs" className = { navbar => navbar.isActive ? styles.active : styles.navbar__item }>Messages</NavLink></li>
                <li className={styles.navbar__item}><NavLink to="/news" className = { navbar => navbar.isActive ? styles.active : styles.navbar__item }>News</NavLink></li>
                <li className={styles.navbar__item}><NavLink to="/users" className = { navbar => navbar.isActive ? styles.active : styles.navbar__item }>Find Users</NavLink></li>
                <li className={styles.navbar__item}><NavLink to="/music" className = { navbar => navbar.isActive ? styles.active : styles.navbar__item }>Music</NavLink></li>
                <li className={styles.navbar__item}><NavLink to="/settings" className = { navbar => navbar.isActive ? styles.active : styles.navbar__item }>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;