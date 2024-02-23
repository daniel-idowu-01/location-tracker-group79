/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const LinkButton = ({ to, label, className }) => {
  return (
    <Link
      to={to}
      className={`block rounded bg-blue-400 px-4 py-2 text-center font-bold tracking-wider text-white transition duration-300 ease-in-out visited:block hover:bg-blue-500 ${className} flex w-max items-center justify-center`}
    >
      <span>{label}</span>
    </Link>
  );
};

export default LinkButton;
