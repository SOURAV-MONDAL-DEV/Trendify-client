import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { storyData } from "./HomeStory";
import "./Story.css";

const Slider = () => {
  return (
    <div className="max-w-full mx-auto mt-0 mb-2 md:my-4">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        spaceBetween={5}
        slidesPerView={3.5}
        breakpoints={{
          600: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          1500: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
          1920: {
            slidesPerView: 7,
            spaceBetween: 15,
          },
        }}
      >
        {storyData.map((story, idx) => (
          <SwiperSlide key={idx}>
            <div>
              {/* <img
                className="storyPhoto w-full h-[180px] object-cover"
                src={story.imgUrl}
                alt=""
              ></img> */}
              <div className=" relative">
                <img
                  className="storyPhoto w-full h-[180px] object-cover"
                  src={story.imgUrl}
                  alt=""
                ></img>
                <img
                  className=" w-8 h-8 absolute bottom-[-15px] left-1/2 transform translate-x-[-50%] object-cover border-2 border-white rounded-6"
                  src={story.imgUrl}
                  alt=""
                ></img>
              </div>
              <div className="personName mt-4 mx-auto text-center text-sm">{story.personName}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
