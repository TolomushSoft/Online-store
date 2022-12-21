import React from 'react';
import './About.scss'
import ipad from '../../images/ipad pro.svg'


const AboutTablets = () => {
    return (
        <>
            <div id="about">
                <div className="container">
                    <div className="about">
                        <div className="about__block">
                            <img width="350px" src={ipad} alt="Drone"/>
                            <div className="about__block__description">
                                <h1 className="about__title">IPad PRO M2</h1>
                                <div className="about__block__description__1">
                                    <div className="about__block__description__2">
                                        <p>Чип:</p>
                                        <p>ОЗУ:</p>
                                        <p>Память:</p>
                                        <p>Дисплей:</p>
                                        <p>Корпус:</p>
                                        <p>Цвет:</p>
                                        <p>Вес:</p>
                                        <p>Производства:</p>
                                    </div>
                                    <div className="about__block__description__3">
                                        <p>М2</p>
                                        <p>6 GB</p>
                                        <p>64GB</p>
                                        <p>13.3 Retina</p>
                                        <p>Алюминевый</p>
                                        <p>Space grey</p>
                                        <p>0.9 kg</p>
                                        <p>США</p>
                                    </div>
                                </div>
                                <h1 className="about__block__description__price">67 660 сом</h1>
                                <button className="about__block__description__btn">Заказать</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default AboutTablets;