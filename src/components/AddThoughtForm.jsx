const AddThoughtForm = () => {
  return (
    <form className="AddThoughtForm">
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddThoughtForm;
