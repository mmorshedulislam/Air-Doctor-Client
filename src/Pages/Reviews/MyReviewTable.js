import { Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import TableRow from "./TableRow";
import { AiFillCloseSquare } from "react-icons/ai";
import { AuthContext } from "../../Contexts/AuthProvider";
import toast from "react-hot-toast";

const MyReviewTable = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/reviewsEmail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        setCount(data.count);
      });
  }, [user?.email]);

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
    </div>
  );
};

export default MyReviewTable;
