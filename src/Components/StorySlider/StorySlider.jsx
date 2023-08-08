import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { storyData } from "./HomeStory";
import "./Story.css";

const Slider = () => {
  return (
      <div className="max-w-[600px] mx-auto" >
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          spaceBetween={5}
          slidesPerView={3}
          breakpoints={{
            600: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
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
              <div className="storyCard relative" >
                <img className="storyPhoto w-full h-180" src={story.imgUrl} alt=""></img>
                <img className="userPhoto absolute bottom-[-15px] left-1/2 transform translate-x-[-50%] w-30 h-30 object-cover border-2 border-white rounded-6" src={story.imgUrl} alt=""></img>
              </div>
              <div className="personName mt-20 text-sm">{story.personName}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
};

export default Slider;
