import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Basket from "./Basket";
import {CountBasketProducts, countBasketThunk, deleteInBasketThunk, getBasketThunk} from "../../Redux/Reducer";


const BasketContainer = ({basket,deleteInBasketThunk,countBasketThunk,
                             getBasketThunk,countBasketProducts,CountBasketProducts}) => {

    const [Render, setRender] = useState(true)

    let Price = basket.map(p => p.price);
    let Count = basket.map(c => c.count);
    let total = 0;
    for (let i = 0; i < basket.length; i++) {
        total = total + Price[i] * Count[i]
    }

    useEffect(() => {
        let basketCount = 0
        for (let i = 0; i < basket.length; i++) {
            basketCount += Count[i]
        }
        CountBasketProducts(basketCount);

    })


    const deleteSmart = (id) => {
        const delSmart = basket
        deleteInBasketThunk(id, delSmart);
    }

    const CountBasket = (id, count) => {
        if (count === 0) {
            deleteSmart(id)
            setRender(true)
        } else {
            countBasketThunk(id, count);
            setRender(true)
        }

    }
    useEffect(() => {

        if (Render === true) {
            getBasketThunk();
            setRender(false)
        }
    }, [Render,getBasketThunk]);







    return <Basket countBasketProducts={countBasketProducts}
                   basket={basket}
                   total={total}
                   CountBasket={CountBasket}
                   CountBasketProducts={CountBasketProducts}
                   deleteSmart={deleteSmart} />
}


const mapStateToProps = (state) => {
    return {
        basket: state.Reducer.basket,
        countBasketProducts: state.Reducer.countBasketProducts
    }
}

export default compose(
    connect(mapStateToProps, {getBasketThunk, deleteInBasketThunk, countBasketThunk, CountBasketProducts}),
    withRouter
)(BasketContainer)