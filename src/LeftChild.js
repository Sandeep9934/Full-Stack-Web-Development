import React from "react";

const LeftChild = ({ data, onItemClick, selectedItemId }) => {
  return (
    <div className="left-child">
      <ul>
        {data.map((item) => (
          <li
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className={selectedItemId === item.id ? "active" : ""}
          >
            {item.Name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftChild;
