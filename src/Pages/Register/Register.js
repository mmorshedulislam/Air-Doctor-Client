import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Register = () => {
  const { register, profileUpdate } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    register(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Successfully Registration");
        form.reset();
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });

    profileUpdate(name, photo)
      .then()
      .then((err) => console.log(err));
  };
  return (
    <div className="md:w-1/2 mx-auto p-6 md:p-0">
      <h2 className="font-bold text-4xl my-6">Register</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Name" value="Your Name" />
          </div>
          <TextInput
            name="name"
            type="text"
            placeholder="Your Name"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Name" value="Profile Photo" />
          </div>
          <TextInput
            name="photo"
            type="text"
            placeholder="Profile Photo URL"
            required={false}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your Email" />
          </div>
          <TextInput
            name="email"
            type="email"
            placeholder="Email"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            name="password"
            type="password"
            placeholder="******"
            required={true}
            shadow={true}
          />
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="agree">
            Already, Have an account?
            <Link to={"/login"} className="text-blue-500">
              Login
            </Link>
          </Label>
        </div>
        <Button type="submit">Register new account</Button>
      </form>
    </div>
  );
};

export default Register;
