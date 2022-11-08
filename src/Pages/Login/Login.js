import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password).then((result) => {
      const user = result.user;
      toast.success("Successfully Log In");
      form.reset();
      navigate(from, { replace: true });
      console.log(user);
    });
  };
  return (
    <div>
      <div className="md:w-1/2 mx-auto p-6 md:p-0">
        <h2 className="font-bold text-4xl my-6">Log In</h2>
        <form onSubmit={handleSignIn} className="flex flex-col gap-4">
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
              Are you new to Air Doctor?
              <Link to={"/register"} className="text-blue-500">
                Register
              </Link>
            </Label>
          </div>
          <Button type="submit">Log In</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
