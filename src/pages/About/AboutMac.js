import React from 'react';
import './About.scss'
import macbook from '../../images/f2f9d93c77c74eff955d8e33aba4f7f5.jpg'

const AboutMac = () => {
    return (

        <div id="about">
            <div className="container">
                <div className="about">
                    <div className="about__block">
                        <img width="350px" src={macbook} alt="Drone"/>
                        <div className="about__block__description">
                            <h1 className="about__title">MacBook PRO M1</h1>
                            <div className="about__block__description__1">
                                <div className="about__block__description__2">
                                    <p>Чип:</p>
                                    <p>ОЗУ:</p>
                                    <p>Жесткий диск:</p>
                                    <p>Дисплей:</p>
                                    <p>Корпус:</p>
                                    <p>Цвет:</p>
                                    <p>Вес:</p>
                                    <p>Производства:</p>
                                </div>
                                <div className="about__block__description__3">
                                    <p>М1</p>
                                    <p>8 GB</p>
                                    <p>SSD 256GB</p>
                                    <p>13.3 Retina</p>
                                    <p>Алюминевый</p>
                                    <p>Space grey</p>
                                    <p>2.4 kg</p>
                                    <p>США</p>
                                </div>
                            </div>
                            <h1 className="about__block__description__price">95 990 сом</h1>
                            <button className="about__block__description__btn">Заказать</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutMac;