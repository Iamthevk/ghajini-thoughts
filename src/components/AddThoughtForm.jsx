import { useState } from "react";

const AddThoughtForm = ({ addThought }) => {
  const [value, setValue] = useState("");
  const handleChange = ({ target }) => {
    setValue(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const thought = {
      id: 3,
      text: value,
      expiresAt: 3000,
    };
    addThought(thought);
    setValue("");
  };
  console.log(value);
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
