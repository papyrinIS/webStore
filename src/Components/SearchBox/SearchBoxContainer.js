import React, {useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getAppleThunk, getXiaomiThunk,searchAC, searchBoxAC} from "../../Redux/Reducer";
import SearchBox from "./SearchBox";


const SearchBoxContainer = ({getAppleThunk,getXiaomiThunk,xiaomi,apple,searchBox,searchBoxAC,searchAC}) => {


    useEffect(()=>{
        getAppleThunk();
    },[getAppleThunk])
    useEffect(()=>{
        getXiaomiThunk();
    },[getXiaomiThunk])



    return<SearchBox xiaomi={xiaomi} apple={apple} searchBoxAC={searchBoxAC} searchAC={searchAC} searchBox={searchBox}/>
}



const mapStateToProps = (state) => {
    return {
        apple: state.Reducer.apple,
        xiaomi: state.Reducer.xiaomi,
        searchBox:state.Reducer.searchBox
    }
}

export default compose(
    connect(mapStateToProps,{getXiaomiThunk,getAppleThunk,searchBoxAC,searchAC}),
    withRouter
)(SearchBoxContainer)