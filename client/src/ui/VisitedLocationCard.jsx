/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa6";

import { convertToEmoji, formatDate } from "../utils/helper";
import Button from "./Button";
import { Link, useParams } from "react-router-dom";

const VisitedLocationCard = ({ linkId }) => {
  const { id } = useParams();

  const handleClick = (e) => {
    console.log("clicked", e);
  };

  return (
    <li className="flex w-full items-center justify-between gap-x-2 rounded-md bg-gray-800 px-3 py-1 text-sm md:px-4 md:py-3 md:text-base">
      <Link
        to={`${id ? id : linkId}`}
        className="flex w-full items-center justify-between"
      >
        <p className="flex items-center justify-between gap-1">
          <span>{convertToEmoji("NG")}</span> <span> NG</span>
        </p>
        <h3>Lagos</h3>
        <time>{formatDate(Date.now())}</time>
      </Link>
      <Button
        className="ml-2 space-x-1 bg-inherit hover:bg-inherit"
        onClick={handleClick}
      >
        <span className="block">
          <FaTrash />
        </span>
      </Button>
    </li>
  );
};

export default VisitedLocationCard;
