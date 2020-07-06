import React, {useState} from "react";
import styles from "./FeedBack.module.css"
import MyPreloader from "../Preloader/Preloader";
import FeedbackElements from "./FeedBackElements";
import FeedBackReduxForm from "./FeedBackForm";

const Feedback = ({feedback, addFeedback, oneApple, oneXiaomi, initializeFeedback}) => {
    const AddFeedBack = (value) => {
        let day = new Date().getDate();
        let month= new Date().getMonth();
        let year = new Date().getFullYear();

        let date =day+"."+month+"."+year
        if (oneApple.length === 0) {
            let id = oneXiaomi.id;
            addFeedback(value.FeedBackName, id, value.FeedBack, check, date)
        } else {
            let id = oneApple.id
            addFeedback(value.FeedBackName, id, value.FeedBack, check, date)
        }
        setCheck(1)
    }

    let FeedBackElements = feedback.filter(f => f.productId === oneXiaomi.id || f.productId === oneApple.id).reverse().
    map(fbe =><FeedbackElements rating={fbe.rating} id={fbe.id} name={fbe.name} date={fbe.date} feedBack={fbe.feedBack}/> )

    const [check, setCheck] = useState(1)
    const check1 = () => {
        setCheck(1)
    }
    const check2 = () => {
        setCheck(2)
    }
    const check3 = () => {
        setCheck(3)
    }
    const check4 = () => {
        setCheck(4)
    }
    const check5 = () => {
        setCheck(5)
    }

    return <div className={styles.feedBack}>feedback
        <div>
            <FeedBackReduxForm check={check} check1={check1} check2={check2} check3={check3} check4={check4}
                               check5={check5} onSubmit={AddFeedBack}/>
        </div>
        {initializeFeedback &&
        <div>
            {FeedBackElements}
        </div>
        }
        {!initializeFeedback &&
        <MyPreloader/>
        }
    </div>
}





export default Feedback