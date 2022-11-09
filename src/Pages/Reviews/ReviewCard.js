import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { name, title, description, photo } = review;
  return (
    <div>
      <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="my-4 font-light">{description}</p>
        </blockquote>
        <figcaption className="flex justify-center items-center space-x-3">
          <img
            className="w-9 h-9 rounded-full"
            src={photo ? photo : <FaUserCircle />}
            alt=""
          />
          <div className="space-y-0.5 font-medium dark:text-white text-left">
            <div>{name}</div>
            <div className="text-sm font-light text-gray-500 dark:text-gray-400">
              Software Engineer at Google Mama!
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default ReviewCard;
