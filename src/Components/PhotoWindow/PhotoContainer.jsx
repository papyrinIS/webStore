import React from "react";
import {connect} from "react-redux";
import Photo from "./Photo";

const PhotoContainer = ({oneXiaomi,oneApple,closePhotoGallery})=>{
    return <Photo oneXiaomi={oneXiaomi} oneApple={oneApple} closePhotoGallery={closePhotoGallery}/>
}


const mapStateToProps =(state)=>{
    return{
        oneXiaomi:state.Reducer.oneXiaomi,
        oneApple:state.Reducer.oneApple
    }
}


export default connect(mapStateToProps,{})(PhotoContainer)