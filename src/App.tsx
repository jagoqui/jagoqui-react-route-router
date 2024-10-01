import { BrowserRouter, Navigate, Route } from "react-router-dom";
import "./App.css";
import { PrivateRoutes, PublicRoutes, Roles } from "./models";
import { AuthGuard, RoleGuard } from "./guards";
import { RoutesWithNotFound } from "./utilities";
import { lazy, Suspense } from "react";
import { Logout } from "./components/Logout.tsx";
import { Dashboard } from "./pages/Private/index.ts";
const Login = lazy(() => import("./pages/Login"));
const Private = lazy(() => import("./pages/Private/Private"));

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <BrowserRouter>
          <Logout />
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard privateValidation={true} />}>
              <Route
                path={`${PrivateRoutes.PRIVATE}/*`}
                element={<Private />}
              />
            </Route>
            <Route element={<RoleGuard rol={Roles.ADMIN} />}>
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
