import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavbarHeader = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("doctorToken");
      })
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
        {user && (
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="Profile"
                  img={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
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
              <Dropdown.Item>
                <Link to="/addBlog">Add Blog</Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
        )}
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
          {user ? (
            <>
              <Navbar.Link>
                <Link to={"/myreviews"}>My Reviews</Link>
              </Navbar.Link>
              <Navbar.Link>
                <Link to={"/addservice"}>Add Service</Link>
              </Navbar.Link>
              <Navbar.Link>
                <Link onClick={handleLogOut}>Log Out</Link>
              </Navbar.Link>
            </>
          ) : (
            <>
              <Navbar.Link>
                <Link to={"/login"}>Log In</Link>
              </Navbar.Link>
              <Navbar.Link>
                <Link to={"/register"}>Register</Link>
              </Navbar.Link>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarHeader;
