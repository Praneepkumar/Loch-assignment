export const checkValidEmail = (email) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return !isEmailValid ? "Please enter a valid email" : null;
};
