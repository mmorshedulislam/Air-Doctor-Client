import { Card } from "flowbite-react";
import React from "react";
import {AiOutlineStar} from 'react-icons/ai'
import { Link } from "react-router-dom";

const ServiceCard = () => {
  return (
    <div className="max-w-full">
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        /* imgSrc="https://www.theclinicondupont.com/wp-content/uploads/2016/10/couple-therapy-clinic-on-dupont-blog.jpg" */
        imgSrc="https://cdn.pixabay.com/photo/2022/10/31/18/44/spider-web-7560535_960_720.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Couple Therapy
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <p className="flex items-center">Ratings:  { [...Array(5)].map(star => <AiOutlineStar className="text-yellow-300 text-xl"/>)}</p>
        <div className="flex justify-between items-center">
          <p className="text-2xl">Price: $99</p>
          <Link to={'/service/id'} className="py-2 px-3 bg-[#9EC23C] text-white rounded">
            Details
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ServiceCard;
