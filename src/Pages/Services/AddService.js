import { Label, Textarea, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";
import useSetTitle from "../../CustomHooks/useSetTitle";

const AddService = () => {
  useSetTitle('Add Service')
  const { user } = useContext(AuthContext);
  const [service, setService] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Service added successfully.");
        console.log(data);
      });
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newService = { ...service };
    newService[field] = value;
    setService(newService);
  };
  return (
    <div>
      <h2 className="text-center text-5xl my-6">Add a Service</h2>
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
              onBlur={handleInputBlur}
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
              <Label htmlFor="photo-url" value="Photo URL" />
            </div>
            <TextInput
              onBlur={handleInputBlur}
              id="photo-url"
              name="image"
              placeholder="Photo URL"
              type="text"
              sizing="md"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="Price" value="Price" />
            </div>
            <TextInput
              onBlur={handleInputBlur}
              id="Price"
              name="price"
              placeholder="Price"
              type="text"
              sizing="md"
            />
          </div>
        </div>
        <div id="textarea">
          <div className="mb-2 block mt-5">
            <Label htmlFor="description" value="Service Description" />
          </div>
          <Textarea
            onBlur={handleInputBlur}
            id="description"
            name="description"
            placeholder="Service Description..."
            required={true}
            rows={4}
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

export default AddService;
