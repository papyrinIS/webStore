import React from "react";
import styles from "./Contacts.module.css"


const Contacts = () => {
    return <div className={styles.contacts}>
        <h3>contacts</h3>
        <p>
            Friends, we work for you from 10: 00 to 22: 00.
        </p>


        <p> Pick-up point working hours:<br/>

            From Monday to Friday from 11: 00 to 20: 00.<br/>
            On Saturday and Sunday from 11: 00 to 19: 00.</p>

        <p>
            You can always get technical support and advice on the range of our products in the following ways:
        </p>
        <ul>
            <li> By placing an order on our website on any day of the week and at any time of the day</li>
            <li> By multi-channel phone numbers in Moscow:<br/> <a href="tel:+79999999999"> 8 (919) 324-36-66</a>,<br/> <a href="tel:+79999999999">8 (495) 000-00-00</a></li>
            <li> You can also contact us via WhatsApp, Telegram messengers</li>
        </ul>
<p>
    You can pick up your ordered product yourself at the pick-up point in Moscow, located at:
</p>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71682.3595171837!2d37.65744493526889!3d55.84403506082723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b534e327860c11%3A0x65c90fcaa3acc0d8!2z0KfQtdGA0LrQuNC30L7QstGB0LrQsNGP!5e0!3m2!1sru!2sru!4v1592731127572!5m2!1sru!2sru"
            width="680" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" title={"maps"}
            tabIndex="0"/>
    </div>
}

export default Contacts;