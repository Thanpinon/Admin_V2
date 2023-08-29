import { debounce } from "lodash";
import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(null);

  const windowListener = debounce(() => {
    if (window) setWidth(window.innerWidth);
  }, 250);

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
      window.addEventListener("resize", windowListener);
    }

    return () => window.removeEventListener("resize", windowListener);
  }, []);

  return width;
};

export default useWindowSize;
