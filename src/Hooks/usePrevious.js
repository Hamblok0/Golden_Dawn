import { useEffect, useRef } from "react";

export const usePrevious = input => {
  const ref = useRef();

  useEffect(() => {
    ref.current = input;
  });
  
  return ref.current;
}
