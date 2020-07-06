import React from "react";
import Preloader from "../../Assets/img/Preloader.gif"
import styles from "./Preloader.module.css"


const MyPreloader = (props) => {
    return<div className={styles.preloader}>
        <img alt={"preloader"} src={Preloader}/>
    </div>
}

export default MyPreloader