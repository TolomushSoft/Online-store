import React from 'react';
import './Gatget.css'
import iphoneX from '../images/17195.webp'
import {NavLink} from 'react-router-dom'

const Gatget = () => {
    return (
        <>
            <div className="block">
                <p className='title'>Iphone 14 Pro Max </p>
                <NavLink to='/about'>
                    <img className='promax' width='130px' src={iphoneX} alt=""/> </NavLink>

                <div className="about">
                    <div className="about-1"><p>Корпус:</p>
                        <p>Влагозащита:</p>
                        <p>Цвет:</p>
                        <p>Тип экрана:</p>
                        <p>Размер экрана:</p></div>
                    <div className="about-2">

                        <p>Метал, стекло</p>
                        <p>IP67</p>
                        <p>Golden</p>
                        <p>IPS</p>
                        <p>4,7</p>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Gatget;


