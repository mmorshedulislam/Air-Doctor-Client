import { Carousel } from "flowbite-react";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="banner my-10">
      <div className="img-gradient rounded-lg">
        <img
          src="https://medintu.in/wp-content/uploads/2021/07/Untitled-design-9-768x512.jpg"
          className="w-full max-h-screen rounded-lg"
          alt=""
        />
      </div>
      <div className="banner-text ">
        <div className="text-4xl lg:text-7xl text-center text-white">
          <h2>
            The World's <br /> Best{" "}
            <i className="font-bold text-[#9EC23C]">Psychological</i> <br />{" "}
            Services
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
