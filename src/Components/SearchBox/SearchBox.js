import React from "react";
import styles from "./SearchBox.module.css"
import {Link} from "react-router-dom";


const SearchBox = ({searchBox,apple,xiaomi,searchBoxAC}) => {

    let AppleElementSearch = apple.filter(f => f.name.includes(searchBox)).map(ae =>{
        const search = ()=>{
            searchBoxAC(ae.name)
        }
        return<div onClick={search} ><Link to={'/smart/'+ae.id}key={ae.id} className={styles.searchBoxElements}>
            {ae.name}
        </Link></div>})

    let XiaomiElementSearch = xiaomi.filter(f => f.name.includes(searchBox)).map(ae =>{
        const search = ()=>{
            searchBoxAC(ae.name)
        }

        return<div onClick={search}> <Link  to={'/smart/'+ae.id} key={ae.id} className={styles.searchBoxElements}>
            {ae.name}
       </Link></div>})

    if(AppleElementSearch===0 || XiaomiElementSearch.length===0){
        return <div className={styles.searchBox}>
            no result search
        </div>
    }


    return <div className={styles.searchBox}>
        {AppleElementSearch}
            {XiaomiElementSearch}
    </div>

}

export default SearchBox;