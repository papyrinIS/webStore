import React from "react";
import star from "../../Assets/img/star.svg";
import starWhite from "../../Assets/img/starWhite.svg";
import styles from "./FeedBack.module.scss";


const FeedBackElements = ({rating,id,name,date,feedBack})=>{
    let realRating = [];

    for (let i = 0; i < rating; i++) {
        realRating[i] += {a: "+", id: i}

    }
    let allRating = []
    let c = 5 - rating
    for (let j = 0; j < c; j++) {
        allRating[j] += {a: "-", id: j}
    }

    let realRatingImg = realRating.map(d => <img key={d.id} alt={"star"} height={13} src={star}/>)
    let allRatingImg = allRating.map(x => <img key={x.id} alt={"starWhite"} height={13} src={starWhite}/>)

    return <div className={styles.feedBackElement} key={id}>
        {name !== undefined ?
            <>
                <div className={styles.firstColumn}>
                    <div className={styles.feedbackName}>{name}</div>
                    <div className={styles.date}>{date}</div>
                </div>
                <div className={styles.secondColumn}>
                    <div >{realRatingImg}{allRatingImg}</div>
                    <div className={styles.feedbackText}>{feedBack}</div>
                </div>
            </> : null}
    </div>
}

export default FeedBackElements;