import React from "react";

// eslint-disable-next-line react/prop-types
const Thought = ({ thought, removeThought }) => {
  function handleRemoveThought() {
    console.log("remove");
    removeThought(thought.id);
  }

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveThought}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
};

export default Thought;
