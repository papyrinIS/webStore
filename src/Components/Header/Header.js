import React, {useState} from "react";
import styles from "./Header.module.css"
import {Link} from "react-router-dom";
import basket from "../../Assets/img/basket.svg"
import SearchBoxContainer from "../SearchBox/SearchBoxContainer";
import search from "../../Assets/img/search.png"
import logo from "../../Assets/img/logo.png"
import useOnclickOutside from "react-cool-onclickoutside";

const Header = ({Search, searchAC, searchBoxAC, countBasketProducts, searchBox}) => {

    const [searchName, setSearch] = useState(Search);


    const inputSearch = (e) => {
        setSearch(e.currentTarget.value)
        searchBoxAC(e.currentTarget.value)
    }

    const onSearch = () => {
        searchAC(searchName)


    }
    const [isOpen,setIsOpen]=useState(false)
    const IsOpen=()=>{
        setIsOpen(true)
    }
    const ref = useOnclickOutside(() => {
       setIsOpen(false)
    });
    const closeSearchBox = () =>{
        setIsOpen(false)

    }


    return <div className={styles.header}>
        <Link to="/" ><img alt={"logo"} height={50} src={logo}/></Link>

            <span ref={ref}>
        <input className={styles.inputSearch} onClick={IsOpen} onChange={inputSearch} value={searchBox}/>

                {isOpen &&
                    <span onClick={closeSearchBox}>
                <SearchBoxContainer/>
                    </span>
                }
        </span>

        <Link className={styles.headerLink} to="/" onClick={onSearch}><img height={25} alt={"search"}
                                                                           src={search}/></Link>
        <Link className={styles.basket} to="/basket">
            <img alt="basket" src={basket}/>
            <span className={styles.count}> {countBasketProducts}</span>
        </Link>

    </div>
}

export default Header;