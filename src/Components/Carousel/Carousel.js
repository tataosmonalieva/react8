import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Navigation, Pagination, Autoplay} from "swiper/modules";
import Logo from '../Assets/Logo.png'




import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css'

import {BACKDROP_URL, IMAGE_URL} from "../../config/config";

const Carousel = ({movies}) => {

    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                // autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false
                // }}
                 navigation={true}
                 pagination={{
                     clickable: true
                 }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                {
                    movies && movies.filter(el => el.backdrop_path).map(movie => {
                        return (
                            <SwiperSlide>
                                <div className={'carousel-img'}
                                     style={{
                                        background:`url(${BACKDROP_URL + movie.backdrop_path})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        display: 'flex',
                                         justifyContent: 'flex-end',
                                         padding: '100px 40px 40px',

                                     }}
                                     >
                                        <div className={'carousel-card'}>
                                            <img
                                                className={'carousel-poster'}
                                                 src={IMAGE_URL + movie.poster_path} alt=""
                                            />
                                          <div>
                                               <h3>{movie.title}</h3>
                                               <p>movie.vote_average</p>
                                               <p>
                                                {movie.overview}
                                               </p>
                                          </div>
                                        </div>
                                 </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
                    }
export default Carousel;