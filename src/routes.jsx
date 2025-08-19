import { Children, Component } from "react";
import LandingPage from "./pages/landing/landing";
import App from "./App";
import BlogPage from "./pages/blog/blog";
import GlossaryPage from "./pages/glossary/glossary";

export default [
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: LandingPage },
      { path: "/glossary", Component: GlossaryPage },
      // { path: "/blog", Component: BlogPage },
    ],
  },
];
