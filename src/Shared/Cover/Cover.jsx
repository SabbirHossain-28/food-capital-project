// import coverImage from "../../assets/images/menu/banner3.jpg";
const Cover = ({img,title,subTitle}) => {
  return (
    <div>
      {/* <div style={{"backgroundImage":`url(${coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height:"700px",width:"100%"}} className=" flex justify-center items-center">
                <div className="text-white bg-[#15151599] py-32 px-96  text-center space-y-4">
                    <h2 className="text-5xl font-bold">OUR MENU</h2>
                    <p>Would you like to try a dish?</p>
                </div>

            </div> */}
      <div>
        <div
          className="hero min-h-[600px]"
          style={{
            backgroundImage:
              `url("${img}")`,
          }}
        >
          {/* <div className=" "></div> */}
          <div className="hero-content h-[300px] text-center hero-overlay bg-opacity-60 text-neutral-content">
            <div className="max-w-xl">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5">
              {subTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
