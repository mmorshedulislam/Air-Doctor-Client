import { Label, Textarea, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useSetTitle from "../../CustomHooks/useSetTitle";

const UpdateReview = () => {
  const review = useLoaderData();
  const { title, description, rating } = review;
  const { user } = useContext(AuthContext);
  const [updateReview, setUpdateReview] = useState({});
  useSetTitle(`Update Review`);
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://air-doctor-server.vercel.app/updateReview/${review._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Review Update successfully.");
        console.log(data);
        event.target.reset();
      });
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const name = user?.displayName;
    const email = user?.email;
    const newReview = { name, email, ...updateReview };
    newReview[field] = value;
    setUpdateReview(newReview);
  };
  return (
    <div>
      <h2 className="text-center text-5xl my-6">Update Your Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Your Name" value="Your Name" />
            </div>
            <TextInput
              onBlur={handleInputBlur}
              id="name"
              name="name"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              type="text"
              sizing="md"
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="Email" value="Email" />
            </div>
            <TextInput
              onBlur={handleInputBlur}
              id="email"
              name="email"
              defaultValue={user?.email}
              readOnly
              type="email"
              sizing="md"
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Review Title" />
            </div>
            <TextInput
              onBlur={handleInputBlur}
              id="title"
              name="title"
              placeholder="Review Title"
              type="text"
              sizing="md"
              defaultValue={title}
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="Rating" value="Rating" />
            </div>
            <TextInput
              onBlur={handleInputBlur}
              id="Rating"
              name="rating"
              placeholder="Out of 5"
              type="text"
              sizing="md"
              defaultValue={rating}
            />
          </div>
        </div>
        <div id="textarea">
          <div className="mb-2 block mt-5">
            <Label htmlFor="description" value="Review Description" />
          </div>
          <Textarea
            onBlur={handleInputBlur}
            id="description"
            name="description"
            placeholder="Review Description..."
            required={true}
            rows={4}
            defaultValue={description}
          />
        </div>
        <div className="w-full my-5">
          <input
            className="py-3 px-4 text-white bg-blue-500 rounded ml-auto"
            type="submit"
            value={"Submit"}
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateReview;
