import React from "react";
import Data from "./Data";

const RightChild = ({ itemId }) => {
  // Find the selected item from the data using its ID
  const selectedItem = Data.find((item) => item.id === itemId);

  return (
    <div className="right-child">
      <h2>{selectedItem.Name}</h2>
      <p>Price: {selectedItem.Price}</p>
    </div>
  );
};

export default RightChild;
