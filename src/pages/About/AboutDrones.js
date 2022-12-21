import React from 'react';
import './About.scss'
import Drone from '../../images/drone-2.svg'

const AboutDrones = () => {
    return (<>
        <div id="about">
            <div className="container">
                <div className="about">
                    <div className="about__block">
                        <img width="450px" src={Drone} alt="Drone"/>
                        <div className="about__block__description">
                            <h1 className="about__title">DJI Mavic Pro</h1>
                            <div className="about__block__description__1">
                                <div className="about__block__description__2">
                                    <p>Корпус:</p>
                                    <p>Объем:</p>
                                    <p>Вес:</p>
                                    <p>Аккумулятор:</p>
                                    <p>Влагозащитность:</p>
                                    <p>Камера:</p>
                                    <p>Производства:</p>
                                    <p>Цвет:</p>
                                </div>
                                <div className="about__block__description__3">
                                    <p>Алюминевый</p>
                                    <p>15Х15</p>
                                    <p>900 г.</p>
                                    <p>4000 mah </p>
                                    <p>IP67</p>
                                    <p>200 mp</p>
                                    <p>США</p>
                                    <p>Space grey</p>
                                </div>
                            </div>
                            <h1 className="about__block__description__price">18 599 сом</h1>
                            <button className="about__block__description__btn">Заказать</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>);
};

export default AboutDrones;