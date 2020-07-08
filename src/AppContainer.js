import React, {useEffect} from "react";

import {connect} from "react-redux";
import {
    CountBasketProducts,
    getAppleThunk, getBasketThunk,
    getXiaomiThunk, initializeApp
} from "./Redux/Reducer";
import App from "./App";


const AppContainer = ({getAppleThunk,getXiaomiThunk,getBasketThunk,CountBasketProducts,basket}) => {



    let Count = basket.map(c => c.count);

    useEffect(  () => {
        let a=0
        for (let i = 0; i < basket.length; i++) {
            a=a+Count[i]
        }
        CountBasketProducts(a);

    })

    useEffect(()=>{
        getAppleThunk();
    },[getAppleThunk])
    useEffect(()=>{
        getXiaomiThunk();
    },[ getXiaomiThunk])
    useEffect(()=>{
        getBasketThunk();
    },[getBasketThunk])

 return <App />
}



const mapStateToProps = (state) => {
    return {
        apple: state.Reducer.apple,
        xiaomi: state.Reducer.xiaomi,
        basket:state.Reducer.basket


    }
}

export default connect(mapStateToProps,{getAppleThunk,getXiaomiThunk,getBasketThunk,CountBasketProducts,initializeApp})(AppContainer)