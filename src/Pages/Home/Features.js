import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { FaHandHoldingMedical } from "react-icons/fa";
import { RiFirstAidKitLine, RiPsychotherapyLine } from "react-icons/ri";

const Features = () => {
  return (
    <div className="my-10">
      <div className="text-center">
        <h2 className="text-2xl font-bold">FEATURES</h2>
        <p>THAT'S WHY YOU SHOULD CHOOSE ME AS YOUR PERSONAL DOCTOR.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 my-10">
        <div className="justify-center flex-col w-1/2 mx-auto">
          <p className="block text-7xl w-2/4 mx-auto">
            <RiPsychotherapyLine />
          </p>
          <p>Psychotherapy</p>
        </div>
        <div className="justify-center flex-col w-1/2 mx-auto">
          <p className="block text-7xl w-2/4 mx-auto">
            <RiFirstAidKitLine />
          </p>
          <p className="text-center">First Aid</p>
        </div>
        <div className="justify-center flex-col w-1/2 mx-auto">
          <p className="block text-7xl w-2/4 mx-auto">
            <AiTwotoneHome />
          </p>
          <p className="text-center">Home Services</p>
        </div>
        <div className="justify-center flex-col w-1/2 mx-auto">
          <p className="block text-7xl w-2/4 mx-auto">
            <FaHandHoldingMedical />
          </p>
          <p className="text-center">Handy</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
