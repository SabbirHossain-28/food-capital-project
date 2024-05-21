import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    fetch("https://sabbirhossain-28.github.io/reviews-json-data/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviewsData(data);
      });
  }, []);
  console.log(reviewsData);
  return (
    <div className="my-16">
      <div className="flex justify-center text-center">
        <SectionTitle
          heading={"TESTIMONIALS"}
          subHeading={"What Our Clients Say"}
        ></SectionTitle>
      </div>
      <div className="text-center">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviewsData.map((data, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex justify-center mb-4">
              <Rating style={{ maxWidth: 180 }} value={data.rating} readOnly></Rating>
              </div>
              <div className="mx-12">
              <p className="text-[#444444] mb-2">{data.details}</p>
              <h3 className="text-[#CD9003] text-xl">{data.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
