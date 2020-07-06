import React from "react";
import styles from "./Product.module.css"
import BasketImg from "../../Assets/img/basket.svg"
import {Link} from "react-router-dom";



const Product = ({CountBasket,addSmart,basket,name,photo,price,id}) =>{


    const AddSmart = () => {
        let basketId = basket.filter(n => n.name === name).map(n => n.id)
        if (basketId.length === 0) {
            addSmart(name,photo, price,id)
        } else {
            let basketCount = basket.filter(b => b.id === basketId[0]).map(b => b.count)
            CountBasket(basketId[0], basketCount[0] + 1);
        }
    }
    return<div className={styles.product}>
        <div>
            <Link to={'/smart/'+id}>
                <img className={styles.productPhoto} alt="photoProduct" src={photo}/>
            </Link>
        </div>
        <div>
            <Link  className={styles.name} to={'/smart/'+id}>{name}</Link>
        </div>
        <div>
            {price}$
        </div>
        <button onClick={AddSmart}><img className={styles.basket} alt="basket" src={BasketImg}/>  add to Basket</button>
    </div>
}

export default Product;