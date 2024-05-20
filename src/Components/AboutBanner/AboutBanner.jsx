import aboutBannerImg from "../../assets/images/home/chef-service.jpg";
const AboutBanner = () => {
  return (
    <div className="relative my-16">
      <img src={aboutBannerImg} alt="" />
      <div className="absolute top-24 right-0 left-0">
        <div className="text-center max-w-4xl mx-auto py-20  bg-white">
          <h2 className="text-4xl font-semibold">Food Capital</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
