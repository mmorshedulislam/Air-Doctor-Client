import React from "react";
import {AiOutlineCheck} from 'react-icons/ai'
const OurCompany = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5 my-10 bg-[#FBF7F6] rounded-lg">
      <div className="flex items-center">
        <img
          className="p-10 rounded-lg"
          src="https://cdn.pixabay.com/photo/2022/10/31/18/44/spider-web-7560535_960_720.jpg"
          alt=""
        />
     {/*    <img
          className="p-10 rounded-lg"
          src="https://www.theclinicondupont.com/wp-content/uploads/2016/10/couple-therapy-clinic-on-dupont-blog.jpg"
          alt=""
        /> */}
      </div>
      <div className="p-10">
        <p className="text-xl text-red-300">About Company</p>
        <h2 className="text-5xl text-[#423837] font-semibold">
          Welcome to our Physical Therapy Service
        </h2>
        <p className="my-4">Over 20 years Experience providing top Quality Therapy across world.</p>
        <div>
            <p className="flex gap-3 items-center"><AiOutlineCheck/> Mental Health Pandamic</p>
            <p className="flex gap-3 items-center my-2"><AiOutlineCheck/> Mental Health Pandamic</p>
            <p className="flex gap-3 items-center"><AiOutlineCheck/> Mental Health Pandamic</p>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
