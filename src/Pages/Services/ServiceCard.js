import { Card } from "flowbite-react";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, price, image, description } = service;
  return (
    <div className="max-w-full">
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        /* imgSrc="https://www.theclinicondupont.com/wp-content/uploads/2016/10/couple-therapy-clinic-on-dupont-blog.jpg" */
        imgSrc={image}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description.slice(0, 100)} ...
        </p>
        <p className="flex items-center">
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
      </Card>
    </div>
  );
};

export default ServiceCard;
