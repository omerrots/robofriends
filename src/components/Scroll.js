import React from "react";

const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "465px",
        maxWidth: "1450px",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
