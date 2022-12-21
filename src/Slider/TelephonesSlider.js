import React, {Component} from "react";
import Slider from "react-slick";
import Gatget from '../Gatgets/Gatget'
import Drone from '../Gatgets/Drone'
import MacBook from '../Gatgets/MacBook'
import Watch from '../Gatgets/Watch'
import Tablet from '../Gatgets/Tablet'
import './slider.css'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            autiplay: true

        };
        return (
            <div>

                <Slider {...settings}>
                    <Gatget/>
                    <Tablet/>
                    <Drone/>
                    <MacBook/>
                    <Watch/>
                    <Gatget/>
                    <Tablet/>
                    <Drone/>
                    <MacBook/>
                    <Watch/>
                </Slider>
            </div>
        );
    }
}
