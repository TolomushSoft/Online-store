import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Admisson.scss'
import './Admisson.css'
import React from 'react';
import SimpleSlider from '../../../Slider/TelephonesSlider'
import iphoneX from '../../../images/17195.webp'
import {NavLink} from 'react-router-dom'
import Ipad from '../../../images/ipad pro.svg'
import Droneimg from '../../../images/drone-2.svg'
import MacBookimg from '../../../images/f2f9d93c77c74eff955d8e33aba4f7f5.jpg'



const Admisson = () => {
    return (<>
        <div className="tabs">
            <h1 className="title1">Горячие поступления</h1>
            <Tabs className="react-tabs">
                <TabList className="react-tabs__tab-list">
                    <Tab className="react-tabs__tab">Все</Tab>
                    <Tab className="react-tabs__tab">Телефоны</Tab>
                    <Tab className="react-tabs__tab">Планшеты</Tab>
                    <Tab className="react-tabs__tab">Дроны</Tab>
                    <Tab className="react-tabs__tab">Ноутбуки</Tab>
                </TabList>
                <TabPanel className="react-tabs__tab-panel">
                    <SimpleSlider/>
                </TabPanel>
                <TabPanel className="react-tabs__tab-panel">
                    <div className="flex-d">
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


                    </div>
                </TabPanel>
                <TabPanel className="react-tabs__tab-panel">
<div className="flex-d">
    <div className="block">
        <p className='title'>IPad Pro M2 </p>
        <NavLink to='/about'>
            <img src={Ipad} alt=""/>            </NavLink>

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
    <div className="block">
        <p className='title'>IPad Pro M2 </p>
        <NavLink to='/about'>
            <img src={Ipad} alt=""/>            </NavLink>

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
    <div className="block">
        <p className='title'>IPad Pro M2 </p>
        <NavLink to='/about'>
            <img src={Ipad} alt=""/>            </NavLink>

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
    <div className="block">
        <p className='title'>IPad Pro M2 </p>
        <NavLink to='/about'>
            <img src={Ipad} alt=""/>            </NavLink>

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
    <div className="block">
        <p className='title'>IPad Pro M2 </p>
        <NavLink to='/about'>
            <img src={Ipad} alt=""/>            </NavLink>

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

</div>
                </TabPanel>
                <TabPanel className="react-tabs__tab-panel">
<div className="flex-d">
    <div className="block">
        <p className='title'>DJI Mavic Pro </p>
        <NavLink to='/about'>
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
    <div className="block">
        <p className='title'>DJI Mavic Pro </p>
        <NavLink to='/about'>
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
    <div className="block">
        <p className='title'>DJI Mavic Pro </p>
        <NavLink to='/about'>
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
    <div className="block">
        <p className='title'>DJI Mavic Pro </p>
        <NavLink to='/about'>
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
    <div className="block">
        <p className='title'>DJI Mavic Pro </p>
        <NavLink to='/about'>
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
</div>
                </TabPanel>
                <TabPanel className="react-tabs__tab-panel">
<div className="flex-d">
    <div className="block">
        <p className='title'>MacBook Pro M1</p>
        <NavLink to='/about'>
            <img width='200 px' height='140px' style={{padding: "41px 0"}} src={MacBookimg} alt=""/> </NavLink>

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
    <div className="block">
        <p className='title'>MacBook Pro M1</p>
        <NavLink to='/about'>
            <img width='200 px' height='140px' style={{padding: "41px 0"}} src={MacBookimg} alt=""/> </NavLink>

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
    <div className="block">
        <p className='title'>MacBook Pro M1</p>
        <NavLink to='/about'>
            <img width='200 px' height='140px' style={{padding: "41px 0"}} src={MacBookimg} alt=""/> </NavLink>

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
    <div className="block">
        <p className='title'>MacBook Pro M1</p>
        <NavLink to='/about'>
            <img width='200 px' height='140px' style={{padding: "41px 0"}} src={MacBookimg} alt=""/> </NavLink>

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
    <div className="block">
        <p className='title'>MacBook Pro M1</p>
        <NavLink to='/about'>
            <img width='200 px' height='140px' style={{padding: "41px 0"}} src={MacBookimg} alt=""/> </NavLink>

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

</div>
                </TabPanel>
            </Tabs>
        </div>

    </>);
};

export default Admisson;

