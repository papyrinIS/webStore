import React, {useEffect} from "react";
import Main from "./Main";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getAppleThunk, getXiaomiThunk, initializeAC, initializeApp} from "../../Redux/Reducer";


const MainContainer = ({xiaomi,apple,Search,initializeApp,initialize,initializeAC}) => {




    useEffect(()=>{
        initializeAC(false)
        initializeApp()
    },[initializeApp,initializeAC])



    return<Main initialize={initialize} xiaomi={xiaomi} apple={apple}  Search={Search}/>
}



const mapStateToProps = (state) => {
    return {
        apple: state.Reducer.apple,
        xiaomi: state.Reducer.xiaomi,
        Search:state.Reducer.search,
        initialize: state.Reducer.initialize
    }
}

export default compose(
    connect(mapStateToProps,{getXiaomiThunk,getAppleThunk,initializeApp,initializeAC}),
    withRouter
)(MainContainer)