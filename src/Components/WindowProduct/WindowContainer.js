import React, {useEffect} from "react";
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
    initializeCounter,
    initializeOneApple,
    initializeOneXiaomi, initializeAC
} from "../../Redux/Reducer";
import WindowProduct from "./WindowProduct";


const WindowContainer = ({getOneXiaomiThunk,getOneAppleThunk,
                             getDescriptionThunk,addInBasketThunk,
                             getBasketThunk,countBasketThunk,
                             basket,oneApple,oneXiaomi,description,match,
                             initializeCounter,initializeOneApple,initializeOneXiaomi,initializeAC,...props}) => {



    useEffect(()=>{
        let id=match.params.id;
        if(id>=10) {
            initializeAC(false)
            initializeOneXiaomi(id);
        }
    },[initializeOneXiaomi,match.params.id,initializeAC])


    useEffect(()=>{
        let id = match.params.id;
        if(id<10) {
            initializeAC(false)
            initializeOneApple(id);
        }
    },[initializeOneApple,match.params.id,initializeAC])

useEffect(()=>{
            getDescriptionThunk();
    },[getDescriptionThunk])


    const addSmart=(name,photo,price,id)=>{
            addInBasketThunk(name,photo,price,id);

    }

    const CountBasket=(id,count)=>{

        initializeCounter(id,count);
    }
    useEffect(()=>{
        getBasketThunk();

    },[getBasketThunk])


    return<WindowProduct basket={basket}
                         oneApple={oneApple}
                         oneXiaomi={oneXiaomi}
                         description={description}
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
        basket:state.Reducer.basket,
        initialize: state.Reducer.initialize
    }
}

export default compose(
    connect(mapStateToProps,{getXiaomiThunk,getAppleThunk,getOneAppleThunk,
        getOneXiaomiThunk,getDescriptionThunk,addInBasketThunk,countBasketThunk,
        getBasketThunk,initializeCounter,initializeOneApple,initializeOneXiaomi,initializeAC}),
    withRouter
)(WindowContainer)