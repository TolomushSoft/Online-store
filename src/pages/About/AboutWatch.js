import React from 'react';
import './About.scss'
import watch from '../../images/apple whatch.svg'


const AboutWatch = () => {
    return (
        <div>
            <div id="about">
                <div className="container">
                    <div className="about">
                        <div className="about__block">
                            <img width="350px" src={watch} alt="Drone"/>
                            <div className="about__block__description">
                                <h1 className="about__title">Apple Watch 5</h1>
                                <div className="about__block__description__1">
                                    <div className="about__block__description__2">
                                        <p>Чип:</p>
                                        <p>ОЗУ:</p>
                                        <p>Дисплей:</p>
                                        <p>Корпус:</p>
                                        <p>Цвет:</p>
                                        <p>Вес:</p>
                                        <p>Производства:</p>
                                    </div>
                                    <div className="about__block__description__3">
                                        <p>U1</p>
                                        <p>2 GB</p>
                                        <p>OLED LTPO Retina</p>
                                        <p>Металл</p>
                                        <p>Черный</p>
                                        <p>0.3 kg</p>
                                        <p>США</p>
                                    </div>
                                </div>
                                <h1 className="about__block__description__price">15 890 сом</h1>
                                <button className="about__block__description__btn">Заказать</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutWatch;