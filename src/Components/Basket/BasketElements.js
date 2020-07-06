import React, {useState} from "react";
import styles from "./Basket.module.scss";
import {Link} from "react-router-dom";

const BasketElement = (props) => {
    const [count, setCount] = useState(props.count)
    let CountMinus = () => {

        setCount(count - 1)
        if (count <= 0) {
            setCount(0)
        }
        props.CountBasket(props.id, count - 1)
    }
    let CountPlus = () => {
        setCount(count + 1)
        props.CountBasket(props.id, count + 1)
    }



    return <div className={styles.basketElement}>
        <Link to={'/smart/'+props.productId}>
            <img src={props.photo} alt="photoSmartphone"/>
        </Link>
        <span className={styles.name}> {props.name}</span>
        <span className={styles.basketCount}>
            <button className={styles.countMinus} onClick={CountMinus}>-</button>
            <div className={styles.count} >{count}</div>
            <button onClick={CountPlus}>+</button>
        </span>
        <span className={styles.price}>{props.price * count}$</span>
        <button className={styles.deletePhone} onClick={() => props.deleteSmart(props.id)}>
            <span className={styles.x1}/>
            <span className={styles.x2}/>
        </button>
    </div>

}

export default BasketElement;