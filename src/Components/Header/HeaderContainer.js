import React, {useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getAppleThunk, getXiaomiThunk, searchAC, searchBoxAC} from "../../Redux/Reducer";
import Header from "./Header";


const HeaderContainer = ({getAppleThunk,getXiaomiThunk,countBasketProducts,Search,searchAC,searchBoxAC,searchBox}) => {

    useEffect(()=>{
        getAppleThunk();
    },[getAppleThunk])
    useEffect(()=>{
        getXiaomiThunk();
    },[getXiaomiThunk])


    return<Header searchAC={searchAC}
                  countBasketProducts={countBasketProducts}
                  searchBoxAC={searchBoxAC}
                  Search={Search}
                  searchBox={searchBox}/>
}



const mapStateToProps = (state) => {
    return {
        Search:state.Reducer.search,
        countBasketProducts:state.Reducer.countBasketProducts,
        searchBox:state.Reducer.searchBox
    }
}

export default compose(
    connect(mapStateToProps,{getXiaomiThunk,getAppleThunk,searchAC,searchBoxAC}),
    withRouter
)(HeaderContainer)