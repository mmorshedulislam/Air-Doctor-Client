import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const NavbarHeader = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.error(err));
  };
  return (
    <div className="container mx-auto">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <Link to={"/"}>
            <img
              src="https://storage.googleapis.com/bubble-finder/$ZviMRReeh5eRrYykwRx8G4M8eLxpcB3Bs4N9rkriA8Mk1RuPav6DRy"
              className="mr-3 h-6 sm:h-9"
              alt="Air doctor"
            />
          </Link>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User"
                img={
                  user
                    ? user?.photoURL
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk59qr_v7TPsRo6b8BvUDuIe32lD-SuTo7L-fmlokDjL-WUtGwor5TeIBoWgi9fClcj10&usqp=CAU"
                }
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">
                {user ? user?.displayName : "Username"}
              </span>
              <span className="block truncate text-sm font-medium">
                {user ? user?.email : "user@mail.com"}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Item>
              <Link to="myReviews">My Reviews</Link>{" "}
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/addService">Add Service</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link>
            <NavLink to={"/"}>Home</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to={"/services"}>Services</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <Link to={"/blogs"}>Blogs</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to={"/login"}>Log In</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarHeader;
