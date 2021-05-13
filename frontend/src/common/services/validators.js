export const checkIfInputIsEmpty = input => {
  return !!input;
};
export const checkLengthOfInput = length => input => {
  return !!input && input.length >= length;
};
