import { Card } from "flowbite-react";
import React from "react";
import {AiOutlineStar} from 'react-icons/ai'

const ServiceCard = () => {
  return (
    <div className="max-w-full">
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://www.theclinicondupont.com/wp-content/uploads/2016/10/couple-therapy-clinic-on-dupont-blog.jpg"
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
          <button className="py-2 px-3 bg-[#9EC23C] text-white rounded">
            Details
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ServiceCard;
