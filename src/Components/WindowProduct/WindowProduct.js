import React, {useState} from "react";
import styles from "./Window.module.scss"
import BasketImg from "../../Assets/img/basket.svg"
import FeedBackContainer from "../FeedBack/FeedBackContainer";
import MyPreloader from "../Preloader/Preloader";
import PhotoContainer from "../PhotoWindow/PhotoContainer";


const WindowProduct = ({basket, oneApple, oneXiaomi, addSmart, CountBasket, description, initialize}) => {

    const AddSmart = () => {
        let basketId = basket
            .filter(n => n.name === oneApple.name || n.name === oneXiaomi.name).map(n => n.id)
        if (basketId.length === 0) {
            if (oneApple.length !== 0) {
                addSmart(oneApple.name, oneApple.photo, oneApple.price, oneApple.id)
            }
            addSmart(oneXiaomi.name, oneXiaomi.photo, oneXiaomi.price, oneXiaomi.id)
        } else {
            let basketCount = basket.filter(b => b.id === basketId[0]).map(b => b.count)
            CountBasket(basketId[0], basketCount[0] + 1);
        }
    }
    let Description = description.filter(des => oneApple.id === des.listId || oneXiaomi.id === des.listId)
        .map(d => <Descriptions key={d.id}{...d}/>)
    const [review, setReview] = useState("specifications")

    const specifications = () => {
        setReview("specifications")
    }
    const Review = () => {
        setReview("review")
    }
    const feedBack = () => {
        setReview("feedBack")
    }
    const [img, setImg] = useState("photo1")

    const Photo1 = () => {
        setImg("photo1")
    }
    const Photo2 = () => {
        setImg("photo2")
    }
    const Photo3 = () => {
        setImg("photo3")
    }

    const [photoGallery, setPhotoGallery] = useState(false)
    const openPhotoGallery = () => {
        setPhotoGallery(true)
    }
    const closePhotoGallery = () => {
        setPhotoGallery(false)
    }

    return <div className={styles.phoneWindow}>
        {!initialize &&  <MyPreloader/> }
        {initialize &&
        <div className={styles.window}>
            <div className={styles.image}>
                <div onClick={openPhotoGallery}>
                    {img === "photo1" &&
                    <img className={styles.photo1} alt="PhotoPhone" src={oneXiaomi.photo || oneApple.photo}/>
                    }
                    {img === "photo2" &&
                    <img className={styles.photo1} alt="PhotoPhone" src={oneXiaomi.photo2 || oneApple.photo2}/>
                    }
                    {img === "photo3" &&
                    <img className={styles.photo1} alt="PhotoPhone" src={oneXiaomi.photo3 || oneApple.photo3}/>
                    }
                </div>

                <img onClick={Photo1} alt="PhotoPhone1" className={styles.photo2}
                     src={oneXiaomi.photo || oneApple.photo}/>
                <img onClick={Photo2} alt="PhotoPhone2" className={styles.photo2}
                     src={oneXiaomi.photo2 || oneApple.photo2}/>
                <img onClick={Photo3} alt="PhotoPhone3" className={styles.photo2}
                     src={oneXiaomi.photo3 || oneApple.photo3}/>
            </div>
            <div className={styles.name}>
                <div>
                    {oneApple.name || oneXiaomi.name}
                </div>
                <div>
                    {oneApple.memory || oneXiaomi.memory}
                </div>
                <div>
                    {oneApple.price || oneXiaomi.price}$
                </div>
                <button onClick={AddSmart} className={styles.buttonToBasket}>
                    <img alt="basket" src={BasketImg}/> Add to Basket
                </button>
            </div>


            <div className={styles.Descriptions}>
                <button disabled={review === "specifications"} className={styles.btnSpecifications}
                        onClick={specifications}>specifications
                </button>
                <button disabled={review === "review"} className={styles.btnReview} onClick={Review}>review</button>
                <button disabled={review === "feedBack"} className={styles.btnFeedBack} onClick={feedBack}>feedback
                </button>
                <div className={styles.descriptionContainer}>
                    {review === "specifications" && Description}
                    {review === "review" &&
                    <video className={styles.video} title="videoSmaprtphone" width="620" height="350"
                           src={oneApple.video || oneXiaomi.video}
                           autoplay="true"
                           allowFullScreen controls/>
                    }
                    {review === "feedBack" &&
                    <FeedBackContainer/>}
                </div>
            </div>
        </div>
        }
        <div>
            {photoGallery &&
            <div>
                <div onClick={closePhotoGallery} className={styles.background}/>

                <PhotoContainer closePhotoGallery={closePhotoGallery}/>
            </div>
            }
        </div>
    </div>
}


export const Descriptions = (props) => {
    return <div>{Object.keys(props).map(key => <DescriptionTitle key={key} Title={key} Value={props[key]}/>)}</div>
}
export const DescriptionTitle = ({Title, Value}) => {
    if (Title === "id" || Title === "listId") {
        return null
    }
    return <div><b>{Title}</b> : {Value}</div>
}


export default WindowProduct;