import React, { useState} from "react";
import styles from "./Header.module.css"
import {Link, Redirect} from "react-router-dom";
import basket from"../../Assets/img/basket.svg"
import SearchBoxContainer from "../SearchBox/SearchBoxContainer";
import search from"../../Assets/img/search.png"
import logo from "../../Assets/img/logo.png"

const Header = ({Search,searchAC,searchBoxAC,countBasketProducts,searchBox}) => {

const[searchName,setSearch]=useState(Search);


const inputSearch = (e)=>{
    setSearch(e.currentTarget.value)
    searchBoxAC(e.currentTarget.value)


}

const onSearch = ()=>{
    searchAC(searchName)
    searchBoxAC("")
    return <Redirect to={"/"}/>

}
const endSearch= ()=>{
    searchAC("")
    setSearch("")
}


    return<div className={styles.header}>
        <Link  to="/" onClick={endSearch}><img alt={"logo"} height={50} src={logo}/></Link>


        <input className={styles.inputSearch} onChange={inputSearch} value={searchName}/>

        { searchBox!==""  &&
                <SearchBoxContainer/>
        }
        <Link className={styles.headerLink} to="/" onClick={onSearch}><img height={25} alt={"search"} src={search}/></Link>
        <Link  className={styles.basket} to="/basket">
            <img alt="basket"   src={basket}/>
           <span className={styles.count}> {countBasketProducts}</span>
        </Link>

    </div>
}

export default Header;