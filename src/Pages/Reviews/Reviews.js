import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";

const Reviews = ({ service }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(
      `https://air-doctor-server-mmorshedulislam.vercel.app/reviewServiceId?serviceId=${service._id}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews));
  }, [service._id]);
  console.log(reviews);

  return (
    <div>
      <div className="section-heading my-10">
        <h2 className="text-4xl lg:text-5xl text-center font-bold">
          - Valuable opinions of our Customers -
        </h2>
      </div>
      <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 mx-5 lg:mx-0">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
      <div className="w-40 mx-auto my-10 flex justify-center">
        <Link
          to={`/addReview/${service._id}`}
          className="py-3 px-5 bg-[#9EC23C] text-white rounded"
        >
          Add a Review
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
