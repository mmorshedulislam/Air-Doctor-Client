import { Carousel } from "flowbite-react";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="banner my-10 mx-5 lg:mx-0">
      <div className="img-gradient rounded-lg">
        {/* https://medintu.in/wp-content/uploads/2021/07/Untitled-design-9-768x512.jpg */}
        <img
          src="https://cdn.pixabay.com/photo/2022/10/16/20/21/storm-clouds-7526102_960_720.jpg"
          className="w-full max-h-screen rounded-lg"
          alt=""
        />
      </div>
      <div className="banner-text ">
        <div className="text-4xl lg:text-7xl text-center text-white">
          <h2>
            The World's Best <br />
            <i className="font-bold text-6xl lg:text-9xl text-[#9EC23C]">
              Psychological
            </i>
            <br /> Services
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
