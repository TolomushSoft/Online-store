import React, { Component } from "react";
import Slider from "react-slick";
import Gatget from '../Gatgets/Gatget'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autiplay:false

        };
        return (
            <div>

                <Slider {...settings}>
                   <Gatget/>
                   <Gatget/>
                   <Gatget/>
                   <Gatget/>
                   <Gatget/>
                   <Gatget/>
                   <Gatget/>
                   <Gatget/>
                   <Gatget/>
                   <Gatget/>
                   <Gatget/>
                </Slider>
            </div>
        );
    }
}
