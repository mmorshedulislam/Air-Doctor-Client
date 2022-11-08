import React from "react";
import { useLoaderData } from "react-router-dom";
import Reviews from "../Reviews/Reviews";
import DetailAService from "./DetailAService";

const ServiceDetails = () => {
  const service = useLoaderData().service;

  return (
    <div>
      <DetailAService service={service}></DetailAService>
      <hr class="my-8 w-full h-1 bg-gray-200 border-0 dark:bg-gray-700" />
      <Reviews service={service}></Reviews>
    </div>
  );
};

export default ServiceDetails;
