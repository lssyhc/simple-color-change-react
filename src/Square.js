import React from "react";

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#fff",
      }}
    >
      <p>{colorValue ? colorValue : "Kosong"}</p>
      <p>{hexValue ? hexValue : null}</p>
      <p></p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: "Kosong aja",
};

export default Square;
