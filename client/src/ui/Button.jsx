/* eslint-disable react/prop-types */
const Button = ({ children, onClick, className, disabled, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`p5-4 flex items-center justify-center rounded-md border-none bg-blue-400 py-2 capitalize text-zinc-100 outline-none transition duration-300 ease-in-out hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
