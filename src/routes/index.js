import React from "react";
import Posts from "../containers/Posts";

export const routes = [
  {
    title: "Posts",
    path: "/",
    exact: true,
    component: () => <Posts />,
  },
];
