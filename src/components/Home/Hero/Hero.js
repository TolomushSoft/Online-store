import React from 'react';
import drone from "../../../images/drone.svg";
import './Hero.scss'
const Hero = () => {
    return (
        <>
            <div id="hero">
                <div className="container">
                    <div className="hero">
                        <div className="hero__title">
                            <h2 className="hero__title__right-title">Яркие гаджеты
                                на любой вкус и день</h2>
                            <p className="hero__title__right-subtitle">Мы собрали лучшие гаджеты от лучших брендов,
                                чтобы порадовать вас свежими новинками digital-рынка. </p>
                            <button className="hero__title__right-btn">Смотреть каталог</button>
                        </div>
                        <div className="hero__background">
                            <img src={drone} alt="Drone" className="hero__background__drone"/>
                            <div className="hero__background__description"><h2
                                className="hero__background__description__title">DJI Mavic Pro</h2>
                                <p className="hero__background__description__subtitle">32 MP Sphere Panoramas <br/>
                                    Foldable & Portable 3-Axis <br/>
                                    Gimbal & 4K Camera</p>
                                <p className="hero__background__description__price">18 599 сом</p></div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;