import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import styles from "./FeedBack.module.scss";
import star from "../../Assets/img/star.svg";
import starWhite from "../../Assets/img/starWhite.svg";


const FeedBackForm = ({handleSubmit, check, check1, check2, check3, check4, check5, time}) => {


    return <form onSubmit={handleSubmit} className={styles.feedbackForm}>
        <Field className={styles.fieldName} placeholder={" your name"} component={"input"} autocomplete="off" name={"FeedBackName"}/>
        {(check === 1 || check === 2 || check === 3 || check === 4 || check === 5) &&
        <img className={styles.check} onClick={check1} alt={"star1"} height={15} src={star} />
        }
        {check !== 1 && check !== 2 && check !== 3 && check !== 4 && check !== 5 &&
        <img className={styles.check} onClick={check1} alt={"starWhite1"} height={15} src={starWhite} />
        }
        {(check === 2 || check === 3 || check === 4 || check === 5) &&
        <img className={styles.check} onClick={check2} alt={"star2"} height={15} src={star} />
        }
        {check !== 2 && check !== 3 && check !== 4 && check !== 5 &&
        <img className={styles.check} onClick={check2} alt={"starWhite2"} height={15} src={starWhite} />
        }
        {(check === 3 || check === 4 || check === 5) &&
        <img className={styles.check} onClick={check3} alt={"star3"} height={15} src={star} />
        }
        {check !== 3 && check !== 4 && check !== 5 &&
        <img className={styles.check} onClick={check3} alt={"starWhite3"} height={15} src={starWhite} />
        }
        {(check === 4 || check === 5) &&
        <img className={styles.check} onClick={check4} alt={"star4"} height={15} src={star} />
        }
        {check !== 4 && check !== 5 &&
        <img className={styles.check} onClick={check4} alt={"starWhite4"} height={15} src={starWhite} />
        }
        {check === 5 &&
        <img className={styles.check} onClick={check5} alt={"star5"} height={15} src={star} />
        }
        {check !== 5 &&
        <img className={styles.check} onClick={check5} alt={"starWhite5"} height={15} src={starWhite} />
        }
        <Field className={styles.fieldFeedback} placeholder={" your feedback"} component={"textarea"}
               name={"FeedBack"}/>


        <button>add</button>
    </form>
}
const afterSubmit = (result, dispatch) =>
    dispatch(reset('feedback'));
const FeedBackReduxForm = reduxForm({form: "feedback", onSubmitSuccess: afterSubmit})(FeedBackForm)


export default FeedBackReduxForm;