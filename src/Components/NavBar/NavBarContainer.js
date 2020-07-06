
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {searchAC} from "../../Redux/Reducer";

import NavBar from "./NavBar";





const mapStateToProps = (state) => {
    return {
search:state.Reducer.search
    }
}

export default compose(
    connect(mapStateToProps,{searchAC}),
    withRouter
)(NavBar)