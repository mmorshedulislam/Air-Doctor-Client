import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AddBlog from "../Pages/Blogs/AddBlog";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddReview from "../Pages/Reviews/AddReview";
import MyReviewTable from "../Pages/Reviews/MyReviewTable";
import UpdateReview from "../Pages/Reviews/UpdateReview";
import AddService from "../Pages/Services/AddService";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://air-doctor-server.vercel.app/service3"),
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/service/:id",
        loader: ({ params }) =>
          fetch(`https://air-doctor-server.vercel.app/service/${params.id}`),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        loader: () => fetch("https://air-doctor-server.vercel.app/blogs"),
        element: <Blogs></Blogs>,
      },
      {
        path: "/addBlog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviewTable></MyReviewTable>
          </PrivateRoute>
        ),
      },
      {
        path: "/addReview/:id",
        loader: ({ params }) =>
          fetch(`https://air-doctor-server.vercel.app/service/${params.id}`),
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateReview/:id",
        loader: ({ params }) =>
          fetch(`https://air-doctor-server.vercel.app/reviewById/${params.id}`),
        element: <UpdateReview></UpdateReview>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
