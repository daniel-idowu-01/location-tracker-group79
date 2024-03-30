import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Error from "./Pages/Error";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./Pages/Dashboard";
import Destinations from "./Pages/Destinations";
import Info from "./Pages/Info";
import CityDetail from "./Pages/CityDetail";
import AddLocationsPage from "./Pages/AddLocationsPage";
import ForgotPassWordPage from "./Pages/ForgotPassWordPage";
// import AuthProvider from "./contexts/AuthContext";
import RequireAuth from "./Features/RequireAuth";
import PersistLogin from "./Features/PersistLogin";
import AuthProvider from "./contexts/AuthContext";
// import LocationsProvider from "./contexts/LocationsContext";

const App = () => {
  const route = createBrowserRouter([
    {
      element: <PersistLogin />,
      children: [
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
              path: "forgot-password",
              element: <ForgotPassWordPage />,
            },
          ],
        },
        {
          path: "dashboard",
          element: <RequireAuth />,
          children: [
            {
              element: <Dashboard />,
              children: [
                { index: true, element: <Navigate to="locations" /> },
                { path: "locations", element: <Destinations /> },
                { path: "locations/:id", element: <CityDetail /> },
                { path: "info", element: <Info /> },
                { path: "form", element: <AddLocationsPage /> },
              ],
            },
          ],
        },

        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            style: {
              duration: 8000,
              backgroundColor: "#065F46",
              width: "max-content",
              padding: "10px 5px",
            },
          },
          error: {
            style: {
              duration: 8000,
              backgroundColor: "#991B1B",
              width: "max-content",
              padding: "10px 5px",
            },
          },
          style: {
            duration: 5000,
            color: "#fff",
            fontSize: "16px",
            width: "150px",
            padding: "10px 5px",
            backgroundColor: "rgb(31 41 55)",
            zIndex: 1000,
          },
        }}
      />
      <RouterProvider router={route}></RouterProvider>
    </AuthProvider>

    // <BrowserRouter>
    //   <AuthProvider>
    //     <Routes>
    //       <Route element={<PersistLogin />}>
    //         <Route element={<AppLayout />}>
    //           <Route path="/" element={<HomePage />} />
    //           <Route path="login" element={<LoginPage />} />
    //           <Route path="register" element={<RegisterPage />} />
    //           <Route path="forgot-password" element={<ForgotPassWordPage />} />
    //         </Route>

    //         <Route
    //           path="dashboard"
    //           element={
    //             <LocationsProvider>
    //               <RequireAuth />
    //             </LocationsProvider>
    //           }
    //         >
    //           <Route index element={<Navigate to="locations" />} />
    //           <Route path="locations" element={<Destinations />} />
    //           <Route path="locations/:id" element={<CityDetail />} />
    //           <Route path="form" element={<AddLocationsPage />} />
    //         </Route>
    //       </Route>
    //     </Routes>
    //   </AuthProvider>
    // </BrowserRouter>
  );
};

export default App;
