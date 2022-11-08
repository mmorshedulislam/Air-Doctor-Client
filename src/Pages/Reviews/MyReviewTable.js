import { Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import TableRow from "./TableRow";
import { AiFillCloseSquare } from "react-icons/ai";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyReviewTable = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(
      `https://air-doctor-server-mmorshedulislam.vercel.app/reviewsEmail?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
      });
  }, [user?.email]);
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
            <TableRow key={review._id} review={review}></TableRow>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyReviewTable;
