import { Children, Component } from "react";
import LandingPage from "./pages/landing/landing";
import App from "./App";
import ProjectsPage from "./pages/projects/projects";
import BlogPage from "./pages/blog/blog";
import AboutMePage from "./pages/about_me/about_me";

export default [
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: LandingPage },
      { path: "/projects", Component: ProjectsPage },
      { path: "/blog", Component: BlogPage },
      { path: "/about_me", Component: AboutMePage },
    ],
  },
];
