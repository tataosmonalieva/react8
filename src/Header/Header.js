import React from "react";
import {Link} from "react-router-dom";
import Logo from '../Components/Assets/Logo.png'
import './style.css'

const Header = () => {
    return (
        <header>
           <Link to={'/'}>
               <img src={Logo} alt=""/>
           </Link>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/movie'}>Movie</Link>
            </div>
        </header>
    )
}
export default Header;