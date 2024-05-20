import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import sliderImg1 from "../../assets/images/home/01.jpg";
import sliderImg2 from "../../assets/images/home/02.jpg";
import sliderImg3 from "../../assets/images/home/03.png";
import sliderImg4 from "../../assets/images/home/04.jpg";
import sliderImg5 from "../../assets/images/home/05.png";
import sliderImg6 from "../../assets/images/home/06.png";

const sliderImages = [
  {
    sliderImage: sliderImg1,
  },
  {
    sliderImage: sliderImg2,
  },
  {
    sliderImage: sliderImg3,
  },
  {
    sliderImage: sliderImg4,
  },
  {
    sliderImage: sliderImg5,
  },
  {
    sliderImage: sliderImg6,
  },
];

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      {sliderImages.map((image, idx) => (
        <div key={idx}>
          <img src={image.sliderImage} />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
