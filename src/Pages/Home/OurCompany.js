import React from "react";

const OurCompany = () => {
  return (
    <div className="grid grid-cols-2 gap-5 py-5 my-10 bg-[#FBF7F6] rounded-lg">
      <div>
        <img
          className="p-10 rounded-lg"
          src="https://www.theclinicondupont.com/wp-content/uploads/2016/10/couple-therapy-clinic-on-dupont-blog.jpg"
          alt=""
        />
      </div>
      <div>
        <p className="text-xl text-red-300">About Company</p>
        <h2 className="text-5xl text-[#423837] font-semibold">
          Welcome to our Physical Therapy Service
        </h2>
      </div>
    </div>
  );
};

export default OurCompany;
