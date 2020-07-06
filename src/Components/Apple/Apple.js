import React from "react";
import styles from "./Apple.module.css"
import ProductContainer from "../Product/ProductContainer";
import MyPreloader from "../Preloader/Preloader";

const Apple = ({Search,apple,initialize}) => {
    if(Search!==""){
        let AppleElementSearch = apple.filter(f => f.name.includes(Search)).map(ae=><ProductContainer key={ae.id} {...ae}/>)

        return<div className={styles.apple}>
            {AppleElementSearch}

        </div>
    }

    let AppleElements = apple.map(ae=><ProductContainer key={ae.id} {...ae}/>)

    return<div className={styles.apple}>
        Apple
        {!initialize &&
        <MyPreloader/>
        }
        {initialize &&
        <div>
            {AppleElements}
        </div>
        }
    </div>
}
export default Apple;