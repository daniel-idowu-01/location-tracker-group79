/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa6";

import { convertToEmoji, formatDate } from "../utils/helper";
import Button from "./Button";
import { Link, useParams } from "react-router-dom";

const VisitedLocationCard = ({ linkId }) => {
  const { id } = useParams();
  return (
    <Link to={`${id ? id : linkId}`} className="w-full">
      <li className="flex w-full items-center justify-between gap-x-2 rounded-md bg-gray-800 px-3 py-1 text-sm md:px-4 md:py-3 md:text-base">
        <span className="block">{convertToEmoji("NG")} NG</span>
        <h3>Lagos</h3>
        <time>{formatDate(Date.now())}</time>
        <Button className="space-x-1 bg-inherit hover:bg-inherit">
          <span className="block">
            <FaTrash />
          </span>
        </Button>
      </li>
    </Link>
  );
};

export default VisitedLocationCard;
