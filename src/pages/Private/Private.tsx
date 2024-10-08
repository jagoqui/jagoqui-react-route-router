import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../models";
import { RoutesWithNotFound } from "../../utilities";
import { lazy } from "react";

const Home = lazy(() => import("./Home/Home"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));

const Private = () => {
  return (
    <>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        <Route path={PrivateRoutes.HOME} element={<Home />} />
      </RoutesWithNotFound>
    </>
  );
};
export default Private;
