import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import demo from '../../assets/demoImage.png'


import { Navigation, Autoplay, Pagination } from 'swiper/modules';



const Card = () => {
  const [slidesPerView, setSlidesPerView] = useState(window.innerWidth >= 768 ? 2 : 1);
  
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth >= 768 ? 2 : 1);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="flex justify-center items-center h-screen w-screen pt-[160px]">

      <div className="relative w-full  h-full ">
        <Swiper
          effect={'coverflow'}

          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 1700,
            disableOnInteraction: false,
          }}
          slidesPerView={slidesPerView}
          spaceBetween={50}
          loop={true}

          pagination={true}
          navigation={true}
          modules={[Navigation, Autoplay, Pagination]}
          className="w-full h-full"
        >
          <SwiperSlide>
            <img src={demo} className="object-cover w-100% h-10%" alt="card1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={demo} className="object-cover w-100% h-10%" alt="card2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={demo} className="object-cover w-100% h-10%" alt="card3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={demo} className="object-cover w-100% h-10%" alt="card4" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Card;
