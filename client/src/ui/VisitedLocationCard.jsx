/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa6";

import { convertToEmoji, formatDate } from "../utils/helper";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useLocations } from "../hooks/useLocations";
// import useAxiosPrivate from "../hooks/useAxiosPrivate";
// import toast from "react-hot-toast";

const VisitedLocationCard = ({ location }) => {
  const { activeCity, setActiveCity } = useLocations();
  // const axiosPrivate = useAxiosPrivate();

  const handleClickedActiveCity = (id) => {
    setActiveCity(id);
  };
  const handleDeleteCity = async (id) => {
    // try {
    //   const response = await axiosPrivate.delete(`/locations/${id}`);
    //   console.log(response);
    //   toast.success("successfully deleted city");
    // } catch (error) {
    //   toast.error(error.message);
    // }

    console.log(id);
  };

  return (
    <li
      className={`flex w-full items-center justify-between gap-x-2 rounded-md bg-gray-800 px-3 py-1 text-sm md:px-4 md:py-3 md:text-base ${activeCity === location.id ? "border-l-4 border-r-4 border-blue-500" : ""}`}
    >
      <Link
        to={`${location.id}?lat=${location.position.latitude}&lng=${location.position.longitude}`}
        onClick={() => {
          handleClickedActiveCity(location.id);
        }}
        className="flex w-full items-center justify-between"
      >
        <p className="flex items-center justify-between gap-1">
          <span>{convertToEmoji(location.countrycode)}</span> <span> NG</span>
        </p>
        <h3>{location.cityname}</h3>
        <time>{formatDate(location.date)}</time>
      </Link>
      <Button
        className="ml-2 space-x-1 bg-inherit hover:bg-inherit"
        onClick={() => handleDeleteCity(location.id)}
      >
        <span className="block">
          <FaTrash />
        </span>
      </Button>
    </li>
  );
};

export default VisitedLocationCard;
