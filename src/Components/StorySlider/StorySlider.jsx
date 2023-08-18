import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { storyData } from "./HomeStory";
import "./Story.css";
import CreateStory from "../../img/CreateStory.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Modal from "./modal";

const Slider = () => {
  const { user, logOut, userInfo } = useContext(AuthContext);
  // const navigate = useNavigate();
  const { _id, email, name, userPhoto, work, address, college } = userInfo;

  //modal--\/--
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <div className="max-w-full mx-auto mt-0 mb-2 md:my-4">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        spaceBetween={5}
        slidesPerView={3.5}
        breakpoints={{
          500: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
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
        <SwiperSlide key={-1}>
          <div>
            <div  className=" relative">
              <img
                onClick={openModal}
                className="storyPhoto w-full h-[180px] object-cover"
                src={CreateStory}
                alt=""
              ></img>
              <img
                className=" w-11 h-11 absolute bottom-[-20px] left-1/2 transform translate-x-[-50%] object-cover border-4 border-gray-100 rounded-full"
                src={userPhoto}
                alt=""
              ></img>
            </div>
            <div className="personName mt-4 mx-auto text-center text-sm">
              You
            </div>
          </div>
        </SwiperSlide>

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
              <div className="personName mt-4 mx-auto text-center text-sm">
                {story.personName}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* Your modal content */}
        <p className="text-gray-800">This is the modal content.</p>
      </Modal>
    </div>
  );
};

export default Slider;
