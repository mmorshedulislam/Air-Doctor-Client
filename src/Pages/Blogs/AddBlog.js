import { Label, Textarea, TextInput } from "flowbite-react";
import React, { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";
import useSetTitle from "../../CustomHooks/useSetTitle";

const AddBlog = () => {
  useSetTitle("Add Blog");
  const { user } = useContext(AuthContext);
  const [blog, setBlog] = useState({});
  const emailRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Blog added successfully.");
        console.log(data);
        event.target.reset();
      });
  };
  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const name = user?.displayName;
    const email = emailRef.current.value;
    const userImg = user?.photoURL;
    const newBlog = { name, email, userImg, ...blog };
    newBlog[field] = value;
    setBlog(newBlog);
  };
  return (
    <div className="m-5">
      <h2 className="text-center text-5xl my-6">Add a Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput
              onBlur={handleInputBlur}
              id="title"
              name="title"
              placeholder="Title"
              type="text"
              sizing="md"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Email" value="Email" />
            </div>
            <TextInput
              ref={emailRef}
              id="email"
              name="email"
              defaultValue={user?.email}
              readOnly
              type="email"
              sizing="md"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="photo-url" value="Blog Photo URL" />
            </div>
            <TextInput
              onBlur={handleInputBlur}
              id="photo-url"
              name="blogImg"
              placeholder="Blog Photo URL"
              type="text"
              sizing="md"
            />
          </div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="description" value="Blog Description" />
            </div>
            <Textarea
              onBlur={handleInputBlur}
              id="description"
              name="description"
              placeholder="Blog Description..."
              required={true}
              rows={4}
            />
          </div>
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

export default AddBlog;
