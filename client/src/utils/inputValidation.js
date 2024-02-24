export const emailValidator = (inputValue) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Trim the input value to check for empty strings
  const trimmedValue = inputValue.trim();

  if (!trimmedValue) {
    return "Email is required";
  }

  if (!emailRegex.test(trimmedValue)) {
    return "Invalid email format";
  }

  return ""; // Return empty string if validation passes
};

export const passwordValidator = (password) => {
  // Trim the password to check for empty strings
  const trimmedPassword = password.trim();

  // Check if password meets criteria
  if (!trimmedPassword) {
    return "Password is required";
  }

  return ""; // Return empty string if validation passes
};

export const passwordValidator2 = (inputValue) => {
  // Define validation rules
  const minLength = 8;
  const maxLength = 20;
  const hasUppercase = /[A-Z]/.test(inputValue);
  const hasLowercase = /[a-z]/.test(inputValue);
  const hasNumber = /[0-9]/.test(inputValue);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(inputValue);
  const forbiddenPatterns = [
    "password",
    "123456",
    "qwerty",
    "abcdef",
    // Add more common passwords or patterns to forbid
  ];

  // Trim the input value to check for empty strings
  const trimmedValue = inputValue.trim();

  // Check if password meets criteria
  if (!trimmedValue) {
    return "Password is required";
  }
  if (trimmedValue.length < minLength || trimmedValue.length > maxLength) {
    return `Password must be between ${minLength} and ${maxLength} characters`;
  }
  if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) {
    return "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
  }
  if (forbiddenPatterns.some((pattern) => trimmedValue.includes(pattern))) {
    return "Password contains forbidden patterns";
  }

  return ""; // Return empty string if validation passes
};

export const confirmPassWordValidator = (password) => {
  (inputValue) => {
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) {
      return "confirm your password";
    }

    if (trimmedValue !== password) {
      return "passwords do not match";
    }
    return "";
  };
};

export const fullNameValidator = (inputValue) => {
  const trimmedValue = inputValue.trim();
  if (!trimmedValue) {
    return "Provide full name";
  }
  return "";
};
