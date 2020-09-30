import { useEffect, useRef } from "react";

const usePrevious = input => {
  const ref = useRef();

  useEffect(() => {
    ref.current = input;
  });
  
  return ref.current;
}

export default usePrevious;
