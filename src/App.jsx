import { useState } from "react";
import "./App.css";
import AddThoughtForm from "./components/AddThoughtForm";
import { getNewExpirationTime, generateId } from "./utils";

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);
  const addThought = (thought) => {
    setThoughts((prevThoughts) => [thought, ...prevThoughts]);
  };
  return (
    <>
      <header className="App">
        <h1>Ghajini Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => {
            return (
              <li className="Thought" key={thought.id}>
                <button aria-label="Remove thought" className="remove-button">
                  &times;
                </button>
                <div className="text">{thought.text}</div>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default App;
