import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosPrivate } from "../auth/axiosConfig";
import useRefreshToken from "./useRefreshToken";
import { useAuth } from "./useAuth";

const useAxiosPrivate = () => {
  const { user, setUser } = useAuth();
  const refresh = useRefreshToken();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${user.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (
          error.response &&
          error.response.status === 403 &&
          !prevRequest?.sent
        ) {
          prevRequest.sent = true;
          try {
            const newAccessToken = await refresh();
            prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
            return axiosPrivate(prevRequest);
          } catch (refreshError) {
            // Handle refresh token failure
            setUser({}); // Clear user data
            navigate("/login", { state: { from: location }, replace: true }); // Redirect to login page
            return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosPrivate.interceptors.response.eject(responseIntercept);
      axiosPrivate.interceptors.response.eject(requestIntercept);
    };
  }, [location, navigate, refresh, setUser, user.accessToken]);

  return axiosPrivate;
};

export default useAxiosPrivate;
