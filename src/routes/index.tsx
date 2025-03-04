import { useRoutes } from "react-router-dom";
import { lazy } from "react";

const SignUp = lazy(() => import("@/pages/signup"));
const SuccessMessage = lazy(() => import("@/pages/successmessage"));

export default function AppRouter() {
  const publicRoutes = [
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/success/:email",
      element: <SuccessMessage />,
    },
  ];
  const routes = useRoutes([...publicRoutes]);

  return routes;
}
