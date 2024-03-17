import { Outlet } from "react-router-dom";
import { Header } from "./components";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}