import { Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import TableRow from "./TableRow";
import { AiFillCloseSquare } from "react-icons/ai";
import { AuthContext } from "../../Contexts/AuthProvider";
import toast from "react-hot-toast";
import useSetTitle from "../../CustomHooks/useSetTitle";

const MyReviewTable = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useSetTitle(`My Reviews - ${user?.displayName ? user?.displayName : ""}`);
  console.log(reviews);
  useEffect(() => {
    fetch(`http://localhost:5000/reviewsEmail?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("doctorToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("doctorToken");
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data.reviews);
      });
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    const agree = window.confirm("Are you want to delete the review?");
    if (agree) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
            toast.success("Deleted Successfully.");
          }
        });
    }
  };
  return (
    <div>
      {reviews.length === 0 ? (
        <h2 className="text-center text-3xl lg:text-6xl my-5">
          No Reviews were Added.
        </h2>
      ) : (
        <h2 className="text-center text-3xl lg:text-6xl my-5">
          Your Have {reviews.length} Reviews
        </h2>
      )}
      {reviews.length > 0 && (
        <Table striped={true}>
          <Table.Head>
            <Table.HeadCell>Service name</Table.HeadCell>
            <Table.HeadCell>Review Title</Table.HeadCell>
            <Table.HeadCell>Review Description</Table.HeadCell>
            <Table.HeadCell>Update</Table.HeadCell>
            <Table.HeadCell className="text-2xl">
              <AiFillCloseSquare />
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {reviews.map((review) => (
              <TableRow
                key={review._id}
                review={review}
                handleDelete={handleDelete}
              ></TableRow>
            ))}
          </Table.Body>
        </Table>
      )}
    </div>
  );
};

export default MyReviewTable;
