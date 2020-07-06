import React, {useEffect, useState} from "react";
import FeedBack from "./FeedBack";
import {connect} from "react-redux";
import {addFeedBackThunk, getFeedBackThunk, initializeFeedbackAC, initializeFeedbackThunk} from "../../Redux/Reducer";

export const FeedBackContainers=({getFeedBackThunk,feedback,
                                     addFeedBackThunk,oneApple,oneXiaomi,
                                     initializeFeedbackThunk,initializeFeedbackAC,initializeFeedback})=>{


    const[render,setRender]=useState(true)
    useEffect(()=>{
        if(render){
            getFeedBackThunk();
            setRender(false)
        }
    },[render,getFeedBackThunk,addFeedBackThunk])
    const addFeedback=(name,id,feedBack,rating,date)=>{
            initializeFeedbackAC(false)
            initializeFeedbackThunk(name, id, feedBack, rating,date)

            setRender(true)

    }




    return <FeedBack initializeFeedback={initializeFeedback} addFeedback={addFeedback} oneApple={oneApple} oneXiaomi={oneXiaomi} feedback={feedback}/>
}

const mapStateToProps=(state)=>{
    return{
        feedback:state.Reducer.feedback,
        oneApple:state.Reducer.oneApple,
        oneXiaomi:state.Reducer.oneXiaomi,
        initializeFeedback: state.Reducer.initializeFeedback
    }
}

export default connect(mapStateToProps,{getFeedBackThunk,addFeedBackThunk,initializeFeedbackThunk,initializeFeedbackAC})(FeedBackContainers)