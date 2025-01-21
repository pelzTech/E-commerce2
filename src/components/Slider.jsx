// Slider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import './Slider.css'; 

import image1 from '../assets/images/hair6.jpg';
import image2 from '../assets/images/perfume6.jpg';
import image3 from '../assets/images/fashion1.jpg';
import image4 from '../assets/images/perfume7.jpg';
import image5 from '../assets/images/fashion2.jpg';

const images = [image1, image2, image3, image4, image5];

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;
