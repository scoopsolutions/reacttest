import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import tanjiro from '../img/ddkkrta-d3d6161c-7370-4ec7-a1e0-6a051999be0f 1.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const Slider =()=>{
    return(
        <>
        
          <Swiper
        pagination={{
          dynamicBullets: false,
          
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="row mt-5">
                <div className="col-md-2"></div>
                <div className="col-md-8 bg-light-purple">
                        <img src={tanjiro} className="w-100 img-fluid img" alt="" />
                </div>
                <div className="col-md-2">
                </div>
                <div className="col-md-12 mt-5 pt-5">
                <h1 className="slider-h1 mt-4">anime<span className="text-purple">yabu.</span></h1>
                <p className="slider-p">
                Assista animes online em HD, legendado ou dublado,<br />
 no seu celular ou computador. <br />
Animeyabu, o seu portal de animes online!
                </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="row mt-5">
                <div className="col-md-2"></div>
                <div className="col-md-8 bg-light-purple">
                        <img src={tanjiro} className="w-100 img-fluid img" alt="" />
                </div>
                <div className="col-md-2">
                </div>
                <div className="col-md-12 mt-5 pt-5">
                <h1 className="slider-h1 mt-4">anime<span className="text-purple">yabu.</span></h1>
                <p className="slider-p">
                Assista animes online em HD, legendado ou dublado,<br />
 no seu celular ou computador. <br />
Animeyabu, o seu portal de animes online!
                </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="row mt-5">
                <div className="col-md-2"></div>
                <div className="col-md-8 bg-light-purple">
                        <img src={tanjiro} className="w-100 img-fluid img" alt="" />
                </div>
                <div className="col-md-2">
                </div>
                <div className="col-md-12 mt-5 pt-5">
                <h1 className="slider-h1 mt-4">anime<span className="text-purple">yabu.</span></h1>
                <p className="slider-p">
                Assista animes online em HD, legendado ou dublado,<br />
 no seu celular ou computador. <br />
Animeyabu, o seu portal de animes online!
                </p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </>
    )
}
export default Slider;