import { useState } from "react";
import { generateId, getNewExpirationTime } from "../utils";

// eslint-disable-next-line react/prop-types
const AddThoughtForm = ({ addThought }) => {
  const [value, setValue] = useState("");
  const handleChange = ({ target }) => {
    setValue(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const thought = {
      id: generateId(),
      text: value,
      expiresAt: getNewExpirationTime(),
    };
    if (value.length > 0) addThought(thought);
    setValue("");
  };
  //   console.log(value);
  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        onChange={handleChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddThoughtForm;
