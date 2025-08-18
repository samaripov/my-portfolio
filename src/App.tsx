import { Outlet } from "react-router";
import Navbar from "./components/navbar/navbar";
import appStyle from "./App.module.css";

export default function App() {
  return (
    <>
      <div className={appStyle.container}>
        <Navbar />
      </div>
      <Outlet />
    </>
  );
}
