import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
// import axiosConfig from "../auth/axiosConfig";
import VisitedLocationCard from "./../ui/VisitedLocationCard";
import toast from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";
import { useLocations } from "../hooks/useLocations";
import Spinner from "../ui/Spinner";

const VisitedLocations = () => {
  // const [cities, setCities] = useState([]);
  const { locations, setLocations } = useLocations();
  const [loading, setLoading] = useState(false);

  const axiosPrivate = useAxiosPrivate();
  const { user } = useAuth();

  useEffect(() => {
    let controller;

    const fetchData = async () => {
      try {
        setLoading(true);
        controller = new AbortController();
        const response = await axiosPrivate.get("/users/locations", {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
          // signal: controller.signal,
        });
        if (!controller.signal.aborted) {
          setLocations(response.data.data);
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Fetch failed", error);
          toast.error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, [axiosPrivate, setLocations, user.accessToken]);

  if (loading && !locations.length) {
    return (
      <div className="m-auto flex w-full rounded bg-gray-700 p-4">
        <Spinner />
      </div>
    );
  }

  if (!locations.length) {
    return (
      <div className="m-auto w-full rounded bg-gray-700 p-4 text-center">
        <p className="my-3">You have no cities to display 😬</p>
        <p>
          Click on map to add cities🏙️ or Click on Get Current Location on the
          map and then add current location to add your current location.
        </p>
      </div>
    );
  }

  if (loading && locations) {
    return (
      <ul className="flex max-h-[280px] w-full flex-col items-center justify-start gap-y-2 overflow-y-auto rounded-md  bg-gray-700 p-4 text-center md:max-h-[500px]">
        {locations &&
          locations.map((location) => (
            <VisitedLocationCard key={location.id} location={location} />
          ))}
      </ul>
    );
  }

  return (
    <ul className="flex max-h-[280px] w-full flex-col items-center justify-start gap-y-2 overflow-y-auto rounded-md  bg-gray-700 p-4 text-center md:max-h-[500px]">
      {locations &&
        locations.map((location) => (
          <VisitedLocationCard key={location.id} location={location} />
        ))}
    </ul>
  );
};

export default VisitedLocations;
