import React from 'react';
import './footer.scss'
import mouse from '../../images/logo-mouse.svg'
import {Link, NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                <div className="footer">
                    <div className="footer__logo">
                        <Link to='/'> <img src={mouse} alt="logo" className="header__logo__mouse"/></Link>
                        <Link to="/">
                            <div className="footer__logo__texts">
                                <h2 className="footer__logo__texts__title">Гаджетариум</h2>
                                <p className="footer__logo__texts__subtitle">Магазин цифровых решений </p>
                            </div>

                        </Link>
                    </div>
                    <div className="footer__menu">
                        <NavLink to='/telephones'>Телефоны</NavLink><br/>
                        <NavLink to='/tablets'>Планшеты</NavLink><br/>
                        <NavLink to='/drones'>Дроны</NavLink><br/>
                        <NavLink to='/watches'>Часы</NavLink><br/>
                        <NavLink to='/macbooks'>Ноутбуки</NavLink>
                    </div>
                    <div className="footer_contacts">
                    <a href='tel:+996706289129' className="footer__contacts__phone">+996706289129</a>
                        <FontAwesomeIcon icon="fa-brands fainstagram" />
                    </div>   <button className="footer__contacts__btn">Заказать звонок</button>

                </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;