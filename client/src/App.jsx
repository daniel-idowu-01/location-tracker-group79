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
import { Toaster } from "react-hot-toast";
import AddLocation from "./Features/AddLocation";

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
        { path: "form", element: <AddLocation /> },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return (
    <RouterProvider router={route}>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "400px",
            padding: "16px 20px",
            backgroundColor: "rgb(31 41 55)",
          },
        }}
      />
    </RouterProvider>
  );
};

export default App;
