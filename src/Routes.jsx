import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Cart from "pages/Cart";
import Homepage from "pages/Homepage";
import Shop from "pages/Shop";
import ShopDetailDescription from "pages/ShopDetailDescription";
import DetailReview from "pages/DetailReview";
import Checkout from "pages/Checkout";
import Wishlist from "pages/Wishlist";
import Team from "pages/Team";
import Blog from "pages/Blog";
import BlogDetail from "pages/BlogDetail";
import Contactus from "pages/Contactus";
import Aboutus from "pages/Aboutus";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Cart />,
    },
    {
      path: "homepage",
      element: <Homepage />,
    },
    {
      path: "shop",
      element: <Shop />,
    },
    {
      path: "shopdetaildescription",
      element: <ShopDetailDescription />,
    },
    {
      path: "detailreview",
      element: <DetailReview />,
    },
    {
      path: "checkout",
      element: <Checkout />,
    },
    {
      path: "wishlist",
      element: <Wishlist />,
    },
    {
      path: "team",
      element: <Team />,
    },
    {
      path: "blog",
      element: <Blog />,
    },
    {
      path: "blogdetail",
      element: <BlogDetail />,
    },
    {
      path: "contactus",
      element: <Contactus />,
    },
    {
      path: "aboutus",
      element: <Aboutus />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
