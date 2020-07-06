import React, {useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getXiaomiThunk,  initializeAC, initializeXiaomi} from "../../Redux/Reducer";
import Xiaomi from "./Xiaomi";


const XiaomiContainer = ({Search,xiaomi,initializeXiaomi,initialize,initializeAC}) => {


useEffect(()=>{
    initializeAC(false)
    initializeXiaomi();
    },[initializeXiaomi,initializeAC])


    return<Xiaomi initialize={initialize}  Search={Search} xiaomi={xiaomi}/>
}



const mapStateToProps = (state) => {
    return {
        xiaomi: state.Reducer.xiaomi,
        Search:state.Reducer.search,
        initialize:state.Reducer.initialize
    }
}

export default compose(
    connect(mapStateToProps,{getXiaomiThunk,initializeXiaomi,initializeAC}),
    withRouter
)(XiaomiContainer)