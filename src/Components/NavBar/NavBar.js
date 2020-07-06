import React from "react";
import styles from"./NavBar.module.css"
import {Link} from "react-router-dom";

const NavBar = ({searchAC}) => {
    const endSearch= ()=>{
        searchAC("")
    }
    return<nav className={styles.navBar}>
        <Link onClick={endSearch}  className={styles.navBarItem} to="/apple">Apple</Link>
       <Link onClick={endSearch} className={styles.navBarItem} to="/xiaomi">Xiaomi</Link>

    </nav>
}

export default NavBar;