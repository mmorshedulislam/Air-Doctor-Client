import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import useSetTitle from "../../CustomHooks/useSetTitle";

const DetailAService = ({ service }) => {
  const { title, image, price, description } = service;
  useSetTitle(`${title} Details`);
  return (
    <div className="px-5 lg:px-0">
      <div className="section-heading my-10">
        <h2 className="text-4xl lg:text-6xl text-center font-bold">
          {" "}
          Details of {title}
        </h2>
      </div>
      <div className="mt-10 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-1/2 md:rounded-none md:rounded-l-lg"
          src={image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <p className="flex items-center mb-6">
            Ratings:{" "}
            {[...Array(5)].map((star) => (
              <AiOutlineStar className="text-yellow-300 text-xl" />
            ))}
          </p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Price: ${price}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default DetailAService;
