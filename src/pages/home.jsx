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
      </Swiper>
      <Swiper
        modules={[Navigation]}
        navigation
        className="swiper-main-1  my-5 mx-3"
        spaceBetween={30}
        slidesPerView={10}
        slidesPerGroup={10}
        loop={true}
        allowTouchMove={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="card-1">
          <img
            src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-13.png"
            width="90"
            hight="100px"
          ></img>
          <h6>Cake & Milk</h6>
          <p>26 items</p>
        </SwiperSlide>
        
        <SwiperSlide className="card-2">
          <img
            src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-12.png"
            width="90"
            hight="100px"
          ></img>
          <h6>Organic Kiwi</h6>
          <p>28 items</p>
        </SwiperSlide>
        <SwiperSlide className="card-3">
          <img
            src="	https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png"
            width="90"
            hight="100px"
          ></img>
          <h6>Peach </h6>
          <p>14 items</p>
        </SwiperSlide>
        <SwiperSlide className="card-4">
          <img
            src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-9.png"
            width="90"
            hight="100px"
          ></img>
          <h6>Red Apple</h6>
          <p>54 items</p>
        </SwiperSlide>
        <SwiperSlide className="card-5">
          <img
            src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png"
            width="90"
            hight="100px"
          ></img>
          <h6>Snack</h6>
          <p>56 items</p>
        </SwiperSlide>
        <SwiperSlide className="card-6">
          <img
            src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-1.png"
            width="90"
            hight="100px"
          ></img>
          <h6>Vegetable</h6>
          <p>72 items</p>
        </SwiperSlide>
        <SwiperSlide className="card-7">
          <img
            src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-2.png"
            width="90"
            hight="100px"
          ></img>
          <h6>Strawberry</h6>
          <p>36 items</p>
        </SwiperSlide>
        <SwiperSlide className="card-8">
          <img
            src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-4.png"
            width="90"
            hight="100px"
          ></img>
          <h6>Black plum</h6>
          <p>123 items</p>
        </SwiperSlide>
        <SwiperSlide className="card-9">
          <img
            src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-5.png"
            width="90"
            hight="100px"
          ></img>
          <h6>Custard Apple</h6>
          <p>34 items</p>
        </SwiperSlide>
        <SwiperSlide className="card-10">
          <img
            src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-14.png"
            width="90"
            hight="100px"
          ></img>
          <h6>Coffe & Tea</h6>
          <p>86 items</p>
        </SwiperSlide>
      </Swiper>
      <div className="bottom-cards">
        <div className="container-fluid">
          <div
            className="row justify-content-between
          "
          >
            <div className="col-4  ">
              <div className="bg-image-1 p-5">
                <div className="heading ">
                  <h3>
                    Everyday Fresh & <br /> Clean With Our <br /> Products
                  </h3>
                  <button>shop now</button>
                </div>
              </div>
            </div>
            <div className="col-4 ">
              <div className="bg-image-2 p-5">
                <div className="heading">
                  <h3>
                    Everyday Fresh & <br /> Clean With Our <br /> Products
                  </h3>
                  <button>shop now</button>
                </div>
              </div>
            </div>
            <div className="col-4 ">
              <div className="bg-image-3 p-5">
                <div className="heading">
                  <h3>
                    Everyday Fresh & <br /> Clean With Our <br /> Products
                  </h3>
                  <button>shop now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
