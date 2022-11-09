import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import ReviewCard from "./ReviewCard";

const Reviews = ({ service }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviewServiceId?serviceId=${service._id}`)
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
      {!user ? (
        <p className="text-center text-2xl">
          Please login to add your Valuable opinion or review.
        </p>
      ) : (
        ""
      )}
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
