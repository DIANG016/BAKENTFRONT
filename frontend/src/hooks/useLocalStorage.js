import { useState, useEffect } from "react";

const useLocalStorage = (varName, outInitVal) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(varName)) || outInitVal
  );

  useEffect(() => {
    value
      ? localStorage.setItem(varName, JSON.stringify(value))
      : localStorage.removeItem(varName);
  }, [value, varName]);

  return [value, setValue];
};

export default useLocalStorage;