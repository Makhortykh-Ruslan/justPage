import React from 'react';
import './header-style.scss'
import {NavLink} from "react-router-dom";
import {v4 as uuidv4} from 'uuid'
import logo from '../../img/sincere_logo_lp.png'
import {linkProps} from "./linkProps";

const Header = () =>{
    const linksElements = linkProps.map(({to, text}) =>
        <li className='header-list-navbar' key={uuidv4()} >
            <NavLink to={to} className='header-list-navbar' >{text}</NavLink>
        </li>)

    return(
        <div className='header-container'>
            <div className='content header-content'>
                <div className='logo-container'>
                    <img className='logo' src={logo} alt="logo"/>
                </div>
                <div className='header-content-nav'>
                    {linksElements}
                </div>
            </div>
            <div className='auth '>
                <NavLink className='header-list-navbar exit' to='/LoginForm' >Вход</NavLink>
            </div>

        </div>
    )
};

export default Header;
