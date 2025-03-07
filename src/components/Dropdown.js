import React, { useRef } from "react";
import { useState } from "react";
import "../App.css";

const Dropdown = () => {
  const [isopen, setIsopen] = useState(false);
  const [hoverIndex, sethoverIndex] = useState(null);
  const dropRef = useRef(null);

  const toggleDropdown = () => {
    setIsopen((prev) => !prev);
  };

  const handleMouseEnter = (index) => {
    sethoverIndex(index);
  };
  const hanldeMouseLeave = () => {
    sethoverIndex(null);
  };

  const handleItemClick = (item) => {
    alert(`Selected item:${item}`);
    setIsopen(false);
  };
  const options = ["option1", "option2", "option3", "option4"];
  return (
    <div className="dropdown">
      <button
        className="dropdown-toggle"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isopen}
      >
        Selected option
      </button>

      {isopen && (
        <ul
          className="dropdown-menu"
          role="menu"
          aria-labelledby="dropdown-button"
          onMouseLeave={hanldeMouseLeave}
        >
          {options.map((item, index) => (
            <li
              key={index}
              role="menuitem"
              className={`dropdown-item ${
                hoverIndex === index ? "hovered" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
