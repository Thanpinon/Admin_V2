import React, { useState, useEffect } from "react";
import useWindowSize from "@hook/useWindowSize";
import Icon from "@component/icon/Icon";
import Link from "next/link";

const CompareNotification = ({ count }) => {
  const width = useWindowSize();
  const marginBottomValue = width <= 900 ? "80px" : "15px";

  const hoverStyle = {
    backgroundColor: "#FF0000",
  };

  const [isVisible, setIsVisible] = useState(count > 0);

  useEffect(() => {
    setIsVisible(count > 0);
  }, [count]);

  return count > 0 ? (
    <Link href="/compare">
      <div
        style={{
          position: "fixed",
          cursor: "pointer",
          bottom: "0",
          left: "0",
          right: "0",
          margin: "10px",
          marginBottom: marginBottomValue,
          borderRadius: "15px",
          width: "300px",
          height: "50px",
          backgroundColor: isVisible ? "#d4001a" : "transparent",
          color: "#fff",
          padding: "8px",
          textAlign: "center",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = isVisible
            ? "#d4001a"
            : "transparent";
        }}
      >
        {isVisible && (
          <>
            <span>
              เปรียบเทียบสินค้าในหมวดหมู่ ({count}
              {count > 1 ? " ชิ้น" : ""})
            </span>
            <Icon variant="small" ml="2px">
              compare
            </Icon>
          </>
        )}
      </div>
    </Link>
  ) : null;
};

export default CompareNotification;
