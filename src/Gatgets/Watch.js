import React from 'react';
import './Gatget.css'
import Watchimg from '../images/apple whatch.svg'
import {NavLink} from 'react-router-dom'

const Watch = () => {
    return (
        <>
            <div className="block">
                <p className='title'>Apple Watch 5</p>
                <NavLink to='/aboutwatch'>
                    <img src={Watchimg} alt=""/> </NavLink>

                <div className="about">
                    <div className="about-1"><p>Корпус:</p>
                        <p>Влагозащита:</p>
                        <p>Цвет:</p>
                        <p>Тип экрана:</p>
                        <p>Размер экрана:</p></div>
                    <div className="about-2">

                        <p>Метал, стекло</p>
                        <p>IP67</p>
                        <p>Черный</p>
                        <p>IPS</p>
                        <p>4,7</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Watch;