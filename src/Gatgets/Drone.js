import React from 'react';
import './Gatget.css'
import Droneimg from '../images/drone-2.svg'
import {NavLink} from 'react-router-dom'

const Drone = () => {
    return (
        <>
            <div className="block">
                <p className='title'>DJI Mavic Pro </p>
                <NavLink to='/aboutdrone'>
                    <img src={Droneimg} alt=""/> </NavLink>

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

export default Drone;