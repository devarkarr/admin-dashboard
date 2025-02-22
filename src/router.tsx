import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
// import RequiredAuth from "./pages/auth/required-auth";

const App = lazy(() => import("./layouts/App"));
const GeneralError = lazy(() => import("./pages/errors/GeneralError"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const User = lazy(() => import("./pages/users"));
const Login = lazy(() => import("./pages/auth/login"));

const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* guest routes */}
        <Route path="/login" element={<Login />} />
        {/* authenticated routes */}
        {/* <Route element={<RequiredAuth />}> */}
        <Route path="/" element={<App />} errorElement={<GeneralError />}>
          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<User />} />
        </Route>
        {/* </Route> */}
      </Routes>
    </Suspense>
  );
};

export default Router;
