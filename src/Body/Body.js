import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { Box, Tooltip } from '@mui/material';
import '../Body/Body.css';

// Import images
import image1 from '../assets/image1.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';

// Import small box images
import amazone from '../assets/amazone.jpg';
import flipkart from '../assets/flipkart.jpg';
import jiomart from '../assets/jiomart.jpg';
import meeso from '../assets/meeso.jpg';
import myntra from '../assets/myntra.jpg';
import Nykaa from '../assets/nykaa.jpg';
import AJIO from '../assets/ajio.jpg';
import lenskart from '../assets/lenskart.jpg';

const smallBoxes = [
  { img: amazone, link: 'https://www.amazon.com', name: 'Amazon' },
  { img: flipkart, link: 'https://www.flipkart.com', name: 'Flipkart' },
  { img: jiomart, link: 'https://www.jiomart.com', name: 'JioMart' },
  { img: meeso, link: 'https://www.meesho.com', name: 'Meesho' },
  { img: myntra, link: 'https://www.myntra.com', name: 'Myntra' },
  { img: Nykaa, link: 'https://www.nykaa.com', name: 'Nykaa' },
  { img: AJIO, link: 'https://www.ajio.com', name: 'AJIO' },
  { img: lenskart, link: 'https://www.lenskart.com', name: 'Lenskart' },
];

const images = [image1, image4, image5, image6];

const Body = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, []);

  return (
    <Box className="body-container">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation
        loop={true}
        effect="fade"
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        speed={500}
        className="swiper-container"
        ref={swiperRef}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box className="image-wrapper">
              <img src={image} alt={`Slide ${index + 1}`} className="styled-image" />
              <Box className="small-boxes-container">
                {smallBoxes.map((box, idx) => (
                  <Tooltip key={idx} title={box.name} arrow>
                    <Box
                      component="a"
                      href={box.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="small-box"
                    >
                      <img src={box.img} alt={box.name} />
                    </Box>
                  </Tooltip>
                ))}
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Body;
