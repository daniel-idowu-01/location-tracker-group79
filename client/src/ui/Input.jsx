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
    onChange(e); 
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
          <div className="text-blue-400 py-1">{icon}</div>
          <label htmlFor={label} className="text-sm capitalize text-zinc-500">
            {label}
          </label>
        </div>{" "}
      </div>

      <input
        type={type}
        name={label}
        id={label}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeHolder}
        className={`h-10 w-full rounded-md border-2 border-gray-300 px-5 py-2 text-zinc-700 placeholder-zinc-400 outline-none focus:border-blue-400 ${
          className ? className : ""
        } ${error ? "border-red-400" : ""}`}
      />
      {error && (
        <span className="block text-xs text-red-400 text-center mt-1">{error}</span>
      )}
      {errorMessage && (
        <span className="block text-xs text-red-400 text-center mt-1">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
