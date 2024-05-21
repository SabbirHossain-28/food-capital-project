import SectionTitle from "../SectionTitle/SectionTitle";
import featuredImg from "../../assets/images/home/featured.jpg";

import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-section my-16 text-white">
      <div className="featured-content p-24">
        <div className="flex justify-center text-center">
          <SectionTitle
            heading={"FROM OUR MENU"}
            subHeading={"Check it out"}
          ></SectionTitle>
        </div>
        <div className="flex items-center gap-8 ">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="space-y-3">
            <p className="text-2xl font-medium">June 21,2024</p>
            <p className="text-2xl font-medium">WHERE CAN I GET SOME?</p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="px-8 py-2 border-b-2 border-[#151515] rounded-lg text-xl font-medium">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
