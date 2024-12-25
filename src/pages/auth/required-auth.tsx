import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function RequiredAuth() {
  const { pathname } = useLocation();

  if (pathname == "/") {
    return <Navigate to="login" replace />;
  }
  return <Outlet />;
}
