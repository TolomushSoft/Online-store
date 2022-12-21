import React from 'react';
import './Gatget.css'
import MacBookimg from '../images/f2f9d93c77c74eff955d8e33aba4f7f5.jpg'
import {NavLink} from 'react-router-dom'

const MacBook = () => {
    return (
        <>
            <div className="block">
                <p className='title'>MacBook Pro M1</p>
                <NavLink to='/aboutmac'>
                    <img width='190 px' height='130px' style={{padding: "32px 0"}} src={MacBookimg} alt=""/> </NavLink>
                <div className="about">
                    <div className="about-1"><p>Чип:</p>
                        <p>ОЗУ:</p>
                        <p>Цвет:</p>
                        <p>Тип экрана:</p>
                        <p>Размер экрана:</p></div>
                    <div className="about-2">

                        <p>М1</p>
                        <p>8 GB</p>
                        <p>Space Grey</p>
                        <p>8K Retina</p>
                        <p>13'3 </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default MacBook;