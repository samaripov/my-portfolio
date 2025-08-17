import { Link } from "react-router";

export default function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about_me">About me</Link>
    </>
  );
}
