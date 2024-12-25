import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

const App = lazy(() => import("./layouts/App"));
const GeneralError = lazy(() => import("./pages/errors/GeneralError"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const User = lazy(() => import("./pages/users"));

const Router = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<App />} errorElement={<GeneralError />}>
          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<User />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
