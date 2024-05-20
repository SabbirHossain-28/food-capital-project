import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className=" w-1/2 text-center bg-[#1F2937] text-white py-24">
          <h3 className="text-2xl font-bold">CONTACT US</h3>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className="w-1/2 bg-[#111827] text-center text-white flex flex-col justify-center px-44 py-24">
            <h3>Follow Us</h3>
            <p>Join us on social media</p>
            <div className="flex justify-center gap-4 text-2xl">
                <FaFacebook></FaFacebook>
                <FaInstagram></FaInstagram>
                <FaTwitter></FaTwitter>
            </div>
        </div>
      </div>
      <div className="py-3 text-center bg-[#151515] text-white">
        <p>Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
