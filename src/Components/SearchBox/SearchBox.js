import React from "react";
import styles from "./SearchBox.module.css"
import {Link} from "react-router-dom";


const SearchBox = ({searchBox,apple,xiaomi,searchBoxAC,searchAC}) => {

    const endSearch=()=>{
        searchBoxAC("");
        searchAC("");
    }
    let AppleElementSearch = apple.filter(f => f.name.includes(searchBox)).map(ae =>
        <div><Link onClick={endSearch} to={'/smart/'+ae.id}key={ae.id} className={styles.searchBoxElements}>
            {ae.name}
        </Link></div>)

    let XiaomiElementSearch = xiaomi.filter(f => f.name.includes(searchBox)).map(ae =>
       <div> <Link onClick={endSearch} to={'/smart/'+ae.id} key={ae.id} className={styles.searchBoxElements}>
            {ae.name}
       </Link></div>)


    return <div className={styles.searchBox}>
        {AppleElementSearch}
            {XiaomiElementSearch}
    </div>

}

export default SearchBox;