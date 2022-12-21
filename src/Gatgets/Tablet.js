import React from 'react';
import Ipad from '../images/ipad pro.svg'
import {NavLink} from  'react-router-dom'
import './Gatget.css'

const Tablet = () => {
    return (
        <>
            <div className="block">
                <p className='title'>IPad Pro M2 </p>
                <NavLink to='/abouttab'>
                    <img src={Ipad} alt=""/></NavLink>

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

export default Tablet;