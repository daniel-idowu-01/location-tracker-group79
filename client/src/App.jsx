import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Error from "./Pages/Error";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./Pages/Dashboard";
import Destinations from "./Pages/Destinations";
import Info from "./Pages/Info";

const App = () => {
  const route = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        { index: true, element: <Navigate to="locations" /> },
        { path: "locations", element: <Destinations /> },
        { path: "info", element: <Info /> },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={route} />;
};

export default App;
