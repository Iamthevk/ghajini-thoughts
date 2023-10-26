import { useState } from "react";
import "./App.css";
import AddThoughtForm from "./components/AddThoughtForm";

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: 1,
      text: "This is a place for your passing thoughts",
      expiresAt: 3000,
    },
    {
      id: 2,
      text: "They'll be removed after 15 seconds.",
      expiresAt: 3000,
    },
  ]);
  return (
    <>
      <header className="App">
        <h1>Ghajini Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm />
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
