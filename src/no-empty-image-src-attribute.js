import React from "react";

function ImageComponent() {
  return (
    <div>
      {/* OK */}
      <img src="logo.svg" alt="This is a SVG image" />

      {/* NOK */}
      <img alt="This is an empty image" />
    </div>
  );
}

export default ImageComponent;
