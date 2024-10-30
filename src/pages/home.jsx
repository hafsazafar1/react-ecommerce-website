import Topbar from "../Shared/components/topbar";
import Navbar from "../Shared/components/navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../css/home.css";
export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Swiper
       modules={[Navigation]}
       navigation
        className="swiper-main"
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="slide-1">
          <h1>
            Don’t miss amazing <br />
            groccery deal
          </h1>
          <p>Sign up for the daily newsletter</p>
          <input type="text" placeholder="Your email address.." />
          <button>Subscribe</button>
        </SwiperSlide>
        <SwiperSlide className="slide-2">
          <h1>
            Fresh Vegetable <br /> Big Discount
          </h1>
          <p>save upto 50% off on your first order</p>
          <input type="text" placeholder="Your email address.." />
          <button>Subscribe</button>
        </SwiperSlide>
        ...
      </Swiper>
    </>
  );
}
