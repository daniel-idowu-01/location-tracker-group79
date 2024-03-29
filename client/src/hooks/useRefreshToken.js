import axios from "../auth/axiosConfig";
import { useAuth } from "./useAuth";

const useRefreshToken = () => {
  const { user, setUser } = useAuth();

  const refresh = async () => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));

    const token = user.accessToken || storedUser?.accessToken;
    if (!token) {
      throw new Error("Please login to access application");
    }

    const response = await axios.post("/auth/token/refresh", { token });
    const newAccessToken = response.data.data.access_token;

    if (user.userName && user.id) {
      setUser((prevUser) => ({
        ...prevUser,
        accessToken: newAccessToken,
      }));
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          accessToken: newAccessToken,
        }),
      );
    }

    if (!user.userName && !user.id) {
      setUser({
        ...storedUser,
        accessToken: newAccessToken,
      });
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          ...storedUser,
          accessToken: newAccessToken,
        }),
      );
    }

    return response.data.data.access_token;
  };

  return refresh;
};

export default useRefreshToken;
