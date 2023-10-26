import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Thought = ({ thought, removeThought }) => {
  function handleRemoveThought() {
    removeThought(thought.id);
  }
  const thoughtRemovalTimer = thought.expiresAt - Date.now();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeThought(thought.id);
    }, thoughtRemovalTimer);
    return () => {
      clearInterval(timer);
    };
  }, [thought]);

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
