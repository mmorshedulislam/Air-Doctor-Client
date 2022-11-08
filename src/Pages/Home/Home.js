import { Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Shared/Header";
import ServiceCard from "../Services/ServiceCard";
import Features from "./Features";
import OurCompany from "./OurCompany";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <OurCompany></OurCompany>
      <div className="section-heading my-10">
        <p className="text-2xl text-center text-[#9EC23C]">Our Services</p>
        <h2 className="text-6xl text-center font-bold">
          {" "}
          Psychological Services
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 lg:px-0">
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
      </div>
      <div className="w-40 mx-auto my-10 flex justify-center">
        <Link to={'/services'} className="py-3 px-5 bg-[#9EC23C] text-white rounded">
          See All
        </Link>
      </div>

      <Features></Features>
    </div>
  );
};

export default Home;
