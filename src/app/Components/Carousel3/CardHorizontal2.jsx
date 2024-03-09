import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CardHorizontal2.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";


const CardHorizontal2 = () => {

  return (
    <main className=" h-screen">
      <div className="flex flex-row justify-between w-full h-[50%] items-center ">
        <div className="flex flex-col justify-center">
        <h6 className="bg-[#fcad15] text-black text-[0.5rem] m-5 w-[10%] uppercase font-extrabold">
                  {" "}
                  Media
                </h6>
        <h1 className="ml-10 text-5xl uppercase font-extralight text-black">
          Blogs and events
        </h1>
        </div>
        <button className="mr-10 text-sm font-thin font-sans uppercase text-black">
          Visit Blog
        </button>
      </div>
      <div className=" bg-[#ffff]">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%] w-screen overflow-y-hidden"
        >
          <SwiperSlide >
            <div
              className="flex flex-col justify-between sm:w-[600px] w-[350px] h-[400px] m-auto relative rounded-xl  "
              id={styles.img}
            >
              <div className="text-black left-0 absolute">
                <div className="flex flex-row px-4 bg-[#fcad15] rounded-xl">
                  <span className="text-5xl m-auto">9</span>
                  <div className="flex flex-col">
                    <span>June</span>
                    <span>2023</span>
                  </div>
                </div>
              </div>
              <div className="text-white absolute bottom-5 left-5 uppercase text-xs ">smart warehouseing a revolution in the making</div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div
              className="flex flex-col justify-between sm:w-[600px] w-[350px] h-[400px] m-auto relative rounded-xl  "
              id={styles.img1}
            >
              <div className="text-black left-0 absolute">
                <div className="flex flex-row px-4 bg-[#fcad15] rounded-xl">
                  <span className="text-5xl m-auto">13</span>
                  <div className="flex flex-col">
                    <span>Oct</span>
                    <span>2023</span>
                  </div>
                </div>
              </div>
              <div className="text-white absolute bottom-5 left-5 uppercase text-xs ">manufactures are turning ai powered machines vision to succeed</div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div
              className="flex flex-col justify-between sm:w-[600px] w-[350px] h-[400px] m-auto relative  rounded-xl "
              id={styles.img2}
            >
              <div className="text-black left-0 absolute">
                <div className="flex flex-row px-4 bg-[#fcad15] rounded-xl">
                  <span className="text-5xl m-auto">15</span>
                  <div className="flex flex-col">
                    <span>June</span>
                    <span>2023</span>
                  </div>
                </div>
              </div>
              <div className="text-white absolute bottom-5 left-5 uppercase text-xs ">customization by casagrand</div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div
              className="flex flex-col justify-between sm:w-[600px] w-[350px] h-[400px] m-auto relative  rounded-xl "
              id={styles.img3}
            >
              <div className="text-black left-0 absolute">
                <div className="flex flex-row px-4 bg-[#fcad15] rounded-xl">
                  <span className="text-5xl m-auto">12</span>
                  <div className="flex flex-col">
                    <span>June</span>
                    <span>2023</span>
                  </div>
                </div>
              </div>
              <div className="text-white absolute bottom-5 left-5 uppercase text-xs ">warehouseing: the future</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
};

export default CardHorizontal2;
