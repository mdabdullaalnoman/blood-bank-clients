import React from 'react';
import './HomeCarousel.css';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { CarouselData } from '../FakeData/AllData';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const HomeCarousel = () => {
      return (
            <div className="col-12">
                  <Swiper
                        loop={true}
                        autoplay={{
                              delay: 1000,
                              disableOnInteraction: true
                        }}
                        spaceBetween={100}
                        slidesPerView={4}
                        pagination={{ clickable: true }}
                  >
                        {
                              CarouselData.map(data => (
                                    <SwiperSlide key={data.id} >

                                          <div>
                                                <div className="carousel-img">
                                                      <img src={data.img} alt="image" />
                                                </div>
                                          </div>

                                    </SwiperSlide>
                              ))
                        }
                  </Swiper>
            </div>
      );
};

export default HomeCarousel;