import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useSetTitle from "../../CustomHooks/useSetTitle";
import jwtSign from "../../JWT/JWTSign";

const Register = () => {
  useSetTitle("Register");
  const { register, profileUpdate } = useContext(AuthContext);
  const [processing, setProcessing] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo =
      form.photo.value ||
      "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    setProcessing(true);
    register(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Successfully Registration");
        setProcessing(false);
        form.reset();
        jwtSign(user);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err?.code);
        setProcessing(false);
      });

    profileUpdate(name, photo)
      .then(() => {
        navigate("/", { replace: true });
      })
      .then((err) => console.log(err));
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
      <div className="w-full flex justify-center items-center">
        <img className="w-full" src="https://img.freepik.com/free-vector/bank-login-concept-illustration_114360-7964.jpg" alt="" />
      </div>
      <div className="w-full mx-auto p-6 md:p-0">
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
          <Button disabled={processing} type="submit">
            Register new account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
