import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay } from "swiper/modules";
import categoryImg1 from "../../assets/images/home/slide1.jpg";
import categoryImg2 from "../../assets/images/home/slide2.jpg";
import categoryImg3 from "../../assets/images/home/slide3.jpg";
import categoryImg4 from "../../assets/images/home/slide4.jpg";
import categoryImg5 from "../../assets/images/home/slide5.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";

const categoryImages = [
  {
    image: categoryImg1,
    title:"SALAD"
  },
  {
    image: categoryImg2,
    title:"PIZZA"
  },
  {
    image: categoryImg3,
    title:"SOUP"
  },
  {
    image: categoryImg4,
    title:"DESSERT"
  },
  {
    image: categoryImg5,
    title:"SALAD"
  },
];

const Category = () => {
  return (
    <div className="my-16">
        <div className="flex justify-center text-center">
        <SectionTitle subHeading={"From 11:00am to 10:00pm"} heading={"ORDER ONLINE"}></SectionTitle>
        </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        {categoryImages.map((data, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative">
            <img className="rounded-xl" src={data.image} alt="Category-card-image" />
            <div className="text-center absolute bottom-5 right-0 left-0">
                <p className="text-xl font-medium text-white">{data.title}</p>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
