import React from 'react';
import './App.scss';
import {Route} from "react-router-dom";
import MainContainer from "./Components/Main/MainContainer";
import WindowContainer from "./Components/WindowProduct/WindowContainer";
import AppleContainer from "./Components/Apple/AppleContainer";
import XiaomiContainer from "./Components/Xiaomi/XiaomiContainer";
import BasketContainer from "./Components/Basket/BasketContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import NavBarContainer from "./Components/NavBar/NavBarContainer";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Pay from "./Components/Pays/Pay";
import Guarantee from "./Components/Guarantee/Guarantee";
import Contacts from "./Components/Contacts/Contacts";

function App() {
    return (
        <div className="App">
            <HeaderContainer/>
            <NavBarContainer/>
            <div className="content">
                <Route exact path="/" render={()=><MainContainer/>}/>
                <Route exact  path="/apple" render={()=><AppleContainer/>}/>
                <Route exact path="/xiaomi" render={()=><XiaomiContainer/>}/>
                <Route   path="/smart/:id" render={()=><WindowContainer/>}/>
                <Route   path="/basket" render={()=><BasketContainer/>}/>
                <Route  path="/about" render={()=><About/>}/>
                <Route  path="/pay" render={()=><Pay/>}/>
                <Route  path="/guarantee" render={()=><Guarantee/>}/>
                <Route  path="/contacts" render={()=><Contacts/>}/>
            </div>
        <Footer/>
        </div>
    );
}

export default App;
