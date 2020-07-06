import React from "react";
import styles from"./Footer.module.css";
import {Link} from "react-router-dom";
import logoVK from "../../Assets/img/vk.png"
import logoInst from "../../Assets/img/inst.png"

const Footer = ()=>{
    return<div className={styles.footer}>

        <div className={styles.links}>
            <Link to={"/about"} className={styles.link}>About</Link>
            <Link to={"/pay"} className={styles.link}>delivery and payment</Link>
            <Link to={"/guarantee"} className={styles.link}>Guarantee</Link>
            <Link to={"/Contacts"} className={styles.link}>Contacts</Link>
        </div>
        <div className={styles.contacts}>
            <a href={"tel:89999999999"} className={styles.contact}>8(919)435 43 53</a>
            <span className={styles.contact}>time to work:</span>
            <span className={styles.contact}>10.00-22.00 every day</span>

            <a target="_blank" without={toString()} rel="noopener noreferrer" href={"https://vk.com"} className={styles.contactLogoVK}><img height={27} width={27} alt={"logoVK"} src={logoVK}/></a>
            <a target="_blank" without={toString()} rel="noopener noreferrer" href={"https://instagram.com"} className={styles.contactLogoInst}><img height={30} width={50} alt={"logoInst"} src={logoInst} /></a>
        </div>
    </div>
}

export default Footer;