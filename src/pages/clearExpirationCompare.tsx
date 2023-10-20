// useClearExpirationCompare.ts
import { useEffect } from "react";

const clearExpirationCompare = () => {
  useEffect(() => {
    console.log("thissss");
    const setTimestamp = () => {
      localStorage.setItem(
        "compareListTimestamp",
        new Date().getTime().toString()
      ); // Convert to string
    };

    const isDataExpired = () => {
      const timestamp = localStorage.getItem("compareListTimestamp");
      if (timestamp) {
        const now = new Date().getTime();
        return now - parseInt(timestamp) > 3000;
      }
      return true;
    };

    const clearCompareList = () => {
      localStorage.removeItem("compareList");
      localStorage.removeItem("compareListTimestamp");
    };

    const clearDataIfExpired = () => {
      if (isDataExpired()) {
        clearCompareList();
      } else {
        setTimestamp();
      }
    };

    clearDataIfExpired();
  }, []);
};

export default clearExpirationCompare;
