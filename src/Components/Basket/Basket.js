import React from "react";
import styles from "./Basket.module.scss"
import BasketElement from "./BasketElements";


const Basket = ({basket,CountBasket,deleteSmart,total}) => {


    let BasketElements = basket.map(b => <BasketElement CountBasket={CountBasket}
                                                        deleteSmart={deleteSmart} key={b.id} {...b}/>)
    return <div className={styles.basket}>
        <span>Basket</span>
        <div>
             {BasketElements}
        </div>
        <div>
            <span className={styles.total}>
                Total: {total}$
            </span>
            <button className={styles.btnBuy}>buy</button>
        </div>

    </div>
}

export default Basket;

