import React, {useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getAppleThunk, initializeAC, initializeApple} from "../../Redux/Reducer";
import Apple from "./Apple";


const AppleContainer = ({apple,Search,initializeApple,initialize,initializeAC}) => {

    useEffect(()=>{
        initializeAC(false);
        initializeApple();
    },[initializeApple,initializeAC])
    return<Apple Search={Search} initialize={initialize} apple={apple}  />
}



const mapStateToProps = (state) => {
    return {
        apple: state.Reducer.apple,
        Search:state.Reducer.search,
        initialize: state.Reducer.initialize
    }
}

export default compose(
    connect(mapStateToProps,{getAppleThunk,initializeApple,initializeAC}),
    withRouter
)(AppleContainer)