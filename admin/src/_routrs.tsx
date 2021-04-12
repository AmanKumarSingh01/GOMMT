import React from "react";

const Home = React.lazy(() => import("./Features/Home/Home"));
const Active = React.lazy(() => import("./Features/Active/Active"));
const List = React.lazy(() => import("./Features/List/List"));
const Post = React.lazy(() => import("./Features/Post/Post"));

const routes = [
  {
    path: "/Home",
    component : Home,
    exact: false,
  },
  {
    path: "/post",
    component: Post,
    exact: false,
  },
  {
    path: "/list",
    component: List,
    exact: false,
  },
  {
    path: "/active",
    component: Active,
    exact: false,
  },
];

export default routes;
