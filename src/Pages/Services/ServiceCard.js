import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, price, image, description } = service;

  return (
    <PhotoProvider>
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <PhotoView src={image}>
          <img class="rounded-t-lg" src={image} alt="" />
        </PhotoView>
        {/* Service description */}
        <div className="m-6">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description.slice(0, 100)} ...
          </p>
          <p className="flex items-center my-3">
            Ratings:{" "}
            {[...Array(5)].map((star) => (
              <AiOutlineStar className="text-yellow-300 text-xl" />
            ))}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-2xl">Price: ${price}</p>
            <Link
              to={`/service/${_id}`}
              className="py-2 px-3 bg-[#9EC23C] text-white rounded"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default ServiceCard;
