import { FaTrash } from "react-icons/fa6";

import { formatDate } from "../utils/helper";
import Button from "./Button";

const VisitedLocationCard = () => {
  return (
    <li className="flex w-full items-center justify-between gap-x-2 rounded-sm bg-gray-800 px-3 py-1 text-sm md:px-4 md:py-3 md:text-base">
      <span className="block">Emoji</span>
      <h3>City Name</h3>
      <time>{formatDate(Date.now())}</time>
      <Button className="space-x-1 bg-inherit hover:bg-inherit">
        <span className="block">
          <FaTrash />
        </span>
      </Button>
    </li>
  );
};

export default VisitedLocationCard;
