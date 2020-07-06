import React, {useState} from "react";
import styles from "./Photo.module.css"


const Photo = ({oneApple, oneXiaomi,closePhotoGallery}) => {
    const [mainPhoto, setMainPhoto] = useState(1)

    const Photo1 = () => {
        setMainPhoto(1)
    }
    const Photo2 = () => {
        setMainPhoto(2)
    }
    const Photo3 = () => {
        setMainPhoto(3)
    }
    const PhotoUp = () => {
        if (mainPhoto === 3) {
            setMainPhoto(1)
        } else
            setMainPhoto(mainPhoto + 1)
    }
    const PhotoDown = () => {
        if (mainPhoto === 1) {
            setMainPhoto(3)
        } else
            setMainPhoto(mainPhoto - 1)
    }



    return <div className={styles.photoWindow}>
        <span onClick={PhotoUp} className={styles.up}>+</span>
        <span onClick={PhotoDown} className={styles.down}>-</span>
        {mainPhoto === 1 &&
        <img className={styles.photo} alt={"photo1"} src={oneApple.photo || oneXiaomi.photo}/>
        }
        {mainPhoto === 2 &&
        <img className={styles.photo} alt={"photo2"} src={oneApple.photo2 || oneXiaomi.photo2}/>
        }
        {mainPhoto === 3 &&
        <img className={styles.photo} alt={"photo3"} src={oneApple.photo3 || oneXiaomi.photo3}/>
        }

        <div className={styles.miniPhoto}>

            {mainPhoto === 1 &&
            <img onClick={Photo1} className={styles.borderPhoto} alt={"photo1"}
                 src={oneApple.photo || oneXiaomi.photo}/>
            }
            {mainPhoto !== 1 &&
            <img onClick={Photo1} alt={"photo1"} src={oneApple.photo || oneXiaomi.photo}/>
            }
            {mainPhoto === 2 &&
            <img onClick={Photo2} className={styles.borderPhoto} alt={"photo2"}
                 src={oneApple.photo2 || oneXiaomi.photo2}/>
            }
            {mainPhoto !== 2 &&
            <img onClick={Photo2} alt={"photo2"} src={oneApple.photo2 || oneXiaomi.photo2}/>
            }

            {mainPhoto === 3 &&
            <img onClick={Photo3} className={styles.borderPhoto} alt={"photo3"}
                 src={oneApple.photo3 || oneXiaomi.photo3}/>
            }
            {mainPhoto !== 3 &&
            <img onClick={Photo3} alt={"photo3"} src={oneApple.photo3 || oneXiaomi.photo3}/>
            }
        </div>

        <span onClick={closePhotoGallery} className={styles.closeBorder}>
            <span className={styles.closeBorder1}/>
            <span className={styles.closeBorder2}/>
        </span>

    </div>
}

export default Photo;