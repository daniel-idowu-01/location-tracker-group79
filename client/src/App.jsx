import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Error from "./Pages/Error";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./Pages/Dashboard";

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
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
  ]);

  return <RouterProvider router={route} />;
};

export default App;
