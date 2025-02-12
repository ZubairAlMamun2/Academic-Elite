import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slidesData = [
  
  {
    
    image: "https://i.ibb.co/xh9ZJHn/banner3.jpg",
    title: "Create and Manage Assignments",
    description:
      "Create and Manage Assignments allows instructors to easily create new assignments, view and edit existing ones, and manage submission deadlines, while students can submit their work for evaluation and feedback."
   
  },
  {
    image: "https://i.ibb.co.com/5xj9xc5h/pexels-ivo-rainha-527110-1290141.jpg",
    title: "Meet, study, collaborate!",
    description:
      "highlights the importance of connecting with others to enhance learning. Working together fosters knowledge-sharing, creativity, and teamwork, leading to more effective and enjoyable study sessions.",
   
  },
  {
    image: "https://i.ibb.co/ggkg7XP/banner2.jpg",
    title: "Study Together, Succeed Together!",
    description:
      "emphasizes the power of collaboration in learning. By sharing knowledge, discussing ideas, and supporting each other, students can achieve greater success and deepen their understanding.",
   
  },
];

const Banner = () => {
  return (
    <div className="mx-4 lg:mx-6 ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 4000 }}
        loop={true}
        className="relative rounded-lg"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              {/* Slide Image */}
              <img
                src={slide.image}
                alt={`banner-${index + 1}`}
                className="max-h-[80vh] w-full object-cover"
              />

             
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#111111ad] to-[#11111152] flex flex-col justify-center items-center text-center md:text-left md:items-start px-4 sm:px-10 md:px-16 lg:px-32 text-white gap-4 md:gap-6">
              
                <h2 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight lg:w-[70%] xl:w-[50%]">
                  {slide.title}
                </h2>

               
                <p className="text-sm sm:text-base md:text-lg lg:text-xl lg:w-[70%] xl:w-[50%]">
                  {slide.description}
                </p>

                
               
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};



export default Banner;
