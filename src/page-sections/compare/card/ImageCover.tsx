import React from "react";

interface ImageCoverProps {
  imageUrl: string;
  altText?: string;
  width: string;
  height: string;
}

const ImageCover: React.FC<ImageCoverProps> = ({ imageUrl, width, height }) => {
  const containerStyle = {
    width,
    height,
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    borderRadius: "5px",
  };

  return <div className="container" style={containerStyle}></div>;
};

export default ImageCover;
