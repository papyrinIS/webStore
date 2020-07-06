import React from "react";
import styles from "./Main.module.css"
import ProductContainer from "../Product/ProductContainer";
import MyPreloader from "../Preloader/Preloader";

const Main = ({Search,apple,xiaomi,initialize}) => {
    if (Search !== "") {
        let AppleElementSearch = apple.filter(f => f.name.includes(Search)).
        map(ae => <ProductContainer key={ae.id} {...ae}/>)

        let XiaomiElementSearch = xiaomi.filter(f => f.name.includes(Search)).
        map(ae => <ProductContainer key={ae.id} {...ae}/>)

        if(AppleElementSearch.length===0 && XiaomiElementSearch.length===0 ){
            return <div className={styles.main}>пусто</div>
        }
        return <div className={styles.main}>
            {AppleElementSearch}
            {XiaomiElementSearch}
        </div>
    }
        let AppleElements = apple.map(ae => <ProductContainer key={ae.id} {...ae}/>)
        let XiaomiElements = xiaomi.map(ae => <ProductContainer key={ae.id} {...ae}/>)

        return <div className={styles.main}>

            {!initialize &&
            <MyPreloader/>
            }
            {initialize &&
            <div>
                <div>Apple</div>
            <div>
                {AppleElements}
            </div>

            <div>
                Xiaomi
            </div>
            <div>
                {XiaomiElements}
            </div>
            </div>
            }
        </div>

}

export default Main;