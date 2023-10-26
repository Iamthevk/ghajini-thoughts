import { useState } from "react";
import "./App.css";
import AddThoughtForm from "./components/AddThoughtForm";
import { getNewExpirationTime, generateId } from "./utils";
import Thought from "./components/Thought";

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
  const removeThought = (thoughtIdToRemove) => {
    setThoughts((prevThoughts) =>
      prevThoughts.filter((thought) => thought.id !== thoughtIdToRemove)
    );
  };
  return (
    <>
      <header className="App">
        <h1>Ghajini Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} removeThought={removeThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => {
            return (
              <Thought
                thought={thought}
                key={thought.id}
                removeThought={removeThought}
              />
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default App;
