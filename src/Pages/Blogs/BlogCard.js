import { Card } from "flowbite-react";
import React from "react";
import { FaUserAlt } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  const { name, userImg, blogImg, photo, title, description } = blog;
  return (
    <div className="mx-5">
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={blogImg}
      >
        <div className="flex items-center gap-x-3">
          <img
            className="rounded-full w-12 h-12"
            src={userImg ? userImg || photo : <FaUserAlt />}
            alt=""
          />
          <div>
            <h5 className="font-semibold">{name}</h5>
            <p>Writer</p>
          </div>
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description.slice(0, 200)} ...
        </p>
      </Card>
    </div>
  );
};

export default BlogCard;
