import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData().service;
  console.log(service);
  return (
    <div>
      <h2 className="text-center text-3xl">
        I am now Service Detail Page. {service?.title}
      </h2>
    </div>
  );
};

export default ServiceDetails;
