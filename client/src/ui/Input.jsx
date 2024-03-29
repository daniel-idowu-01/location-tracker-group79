/* eslint-disable react/prop-types */

import { useState } from "react";

const Input = ({
  label,
  type,
  value,
  onChange,
  placeHolder,
  errorMessage,
  icon,
  validateOnBlur,
  validateFunction,
  className,
  labelClassName,
  disabled,
}) => {
  const [error, setError] = useState("");

  const handleBlur = () => {
    if (validateOnBlur) {
      validate(value);
    }
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (validateOnBlur) {
      // Clear error when user starts typing
      setError("");
    }
    onChange(e); // Call the onChange function passed from parent component
    if (!validateOnBlur) {
      // If validateOnBlur is false, validate on each change
      validate(inputValue);
    }
  };

  const validate = (value) => {
    if (validateFunction) {
      const errorMessage = validateFunction(value);
      setError(errorMessage || "");
    }
  };

  return (
    <div className="mb-4 flex w-full flex-col items-start gap-1 last-of-type:mb-0">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center justify-start gap-1">
          {icon}
          <label
            htmlFor={label}
            className={`text-sm capitalize text-zinc-500 ${labelClassName}`}
          >
            {label}
          </label>
        </div>{" "}
        <span className="block text-xs capitalize text-red-400">
          {error || errorMessage}
        </span>
      </div>

      <input
        type={type}
        name={label}
        id={label}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeHolder}
        disabled={disabled}
        className={`h-10 w-full rounded-md border-2 border-gray-300 px-5 py-2 text-zinc-700 placeholder-zinc-400 outline-none focus:border-blue-400 disabled:cursor-not-allowed disabled:border-zinc-400  ${className} ${error || errorMessage ? "border-red-400" : ""}`}
      />
    </div>
  );
};

export default Input;
