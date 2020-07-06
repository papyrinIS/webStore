import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {
    getAppleThunk,
    getOneAppleThunk,
    getXiaomiThunk,
    getOneXiaomiThunk,
    getDescriptionThunk,
    addInBasketThunk,
    countBasketThunk,
    getBasketThunk,
    searchAC,
    initializeCounter
} from "../../Redux/Reducer";
import Product from "./Product";


const ProductContainer = ({getOneXiaomiThunk,getOneAppleThunk,
                              addInBasketThunk,countBasketThunk,
                              getBasketThunk,
                              oneApple,oneXiaomi,
                              basket,match,initializeCounter,...props}) => {
    const[Render,setRender]=useState(true)

    useEffect(()=>{
        let id=match.params.id;
        if(id>=10) {
            getOneXiaomiThunk(id);
        }
    },[getOneXiaomiThunk,match.params.id])


    useEffect(()=>{
        let id = match.params.id;
        if(id<10) {
            getOneAppleThunk(id);
        }
    },[getOneAppleThunk,match.params.id])



    const addSmart = (name,photo,price,id) => {
            addInBasketThunk(name,photo,price,id);
        setRender(true)
    }


    const CountBasket=(id,count)=>{

        initializeCounter(id,count);
        setRender(true)
    }





    useEffect(() => {
        if (Render === true) {
            getBasketThunk();
            setRender(false)
        }
    }, [Render,getBasketThunk]);



    return<Product basket={basket}
                   CountBasket={CountBasket}
                   addSmart={addSmart}
                   {...props}/>
}



const mapStateToProps = (state) => {
    return {
        apple: state.Reducer.apple,
        xiaomi: state.Reducer.xiaomi,
        oneApple: state.Reducer.oneApple,
        oneXiaomi:state.Reducer.oneXiaomi,
        description: state.Reducer.description,
        basket:state.Reducer.basket
    }
}

export default compose(
    connect(mapStateToProps,{getXiaomiThunk,getAppleThunk,getOneAppleThunk,
        getOneXiaomiThunk,getDescriptionThunk,addInBasketThunk,
        countBasketThunk,getBasketThunk,searchAC,initializeCounter}),
    withRouter
)(ProductContainer)