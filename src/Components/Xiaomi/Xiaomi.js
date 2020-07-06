import React from "react";
import styles from "./Xiaomi.module.css"
import ProductContainer from "../Product/ProductContainer";
import MyPreloader from "../Preloader/Preloader";

const Xiaomi = ({Search,xiaomi,initialize}) => {
    if(Search!==""){
        let XiaomiElementSearch = xiaomi.filter(f => f.name.includes(Search)).map(ae=><ProductContainer key={ae.id} {...ae}/>)
        return<div className={styles.xiaomi}>
            {XiaomiElementSearch}
        </div>
    }
    let XiaomiElements = xiaomi.map(ae=><ProductContainer key={ae.id} {...ae}/>)
    return<div className={styles.xiaomi}>
        Xiaomi
        {!initialize &&
        <MyPreloader/>
        }
        {initialize &&
        <div>
            <div>
                {XiaomiElements}
            </div>
        </div>
        }
    </div>
}
export default Xiaomi;