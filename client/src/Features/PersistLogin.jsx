import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useRefreshToken from "../hooks/useRefreshToken";
import { useAuth } from "../hooks/useAuth";
import Spinner from "../ui/Spinner";
// import useSessionStorage from "../hooks/useSessionStorage";
// import axiosConfig from "../auth/axiosConfig";

const PersistLogin = () => {
  const [loading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  // const [setUserData] = useSessionStorage("user", `{}`);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      // const data = JSON.parse(sessionStorage.getItem("user"));
      // const userData = userDataString ? JSON.parse(userDataString) : null;

      // if (userData && userData.userName && userData.accessToken) {
      //   setUser(userData);
      // }
      try {
        // if (!data?.accessToken) {
        //   throw new Error("Please login to start session");
        // }
        // const response = await axiosConfig.post("/auth/token/refresh", {
        //   token: data.accessToken,
        // });
        // setUser({ ...data, accessToken: response.data.data.access_token });
        // setUserData({
        //   ...data,
        //   accessToken: response.data.data.access_token,
        // });
        await refresh();
      } catch (error) {
        setUser({});
        sessionStorage.removeItem("user");
        navigate("/");
      } finally {
        setIsLoading(false);
      }
    };

    !user.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex h-screen w-full bg-gray-800">
          <Spinner />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
