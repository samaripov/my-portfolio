import { Link, useLocation } from "react-router";
import navbarStyle from "./navbar.module.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [selectStyles, setSelectStyles] = useState({
    background: "#1b7eef",
  });

  useEffect(() => {
    switch (currentPath) {
      case "/":
        setSelectStyles({
          background: "#1b7eef",
        });
        break;
      case "/projects":
        setSelectStyles({
          background: "#eac435",
          transform: "translate(9rem)",
        });
        break;
      case "/blog":
        setSelectStyles({
          background: "#e40066",
          transform: "translate(18rem)",
        });
        break;
      case "/about_me":
        setSelectStyles({
          background: "#03cea4",
          transform: "translate(27rem)",
        });
        break;
    }
  }, [currentPath]);
  return (
    <div className={navbarStyle.container}>
      <Link
        className={`${
          currentPath === "/" &&
          `${navbarStyle.active} ${navbarStyle.animate_select}`
        } ${navbarStyle.button}`}
        to="/"
      >
        Home
      </Link>
      <Link
        id="projects_link"
        className={`${currentPath === "/projects" && `${navbarStyle.active} ${navbarStyle.animate_select}`} ${
          navbarStyle.button
        }`}
        to="/projects"
      >
        Projects
      </Link>
      <Link
        className={`${currentPath === "/blog" && `${navbarStyle.active} ${navbarStyle.animate_select}`} ${
          navbarStyle.button
        }`}
        to="/blog"
      >
        Blog
      </Link>
      <Link
        className={`${currentPath === "/about_me" && `${navbarStyle.active} ${navbarStyle.animate_select}`} ${
          navbarStyle.button
        }`}
        to="/about_me"
      >
        About me
      </Link>
      <div
        id="select"
        style={selectStyles}
        className={navbarStyle.select}
      ></div>
    </div>
  );
}
