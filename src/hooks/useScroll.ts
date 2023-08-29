import { useCallback, useEffect, useState } from "react";

const useScroll = (height = 60) => {
  const [isFixed, setFixed] = useState(false);

  const scrollListener = useCallback(() => setFixed(window.pageYOffset > height), []);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return { isFixed };
};

export default useScroll;
