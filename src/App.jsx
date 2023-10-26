import { useState } from "react";
import "./App.css";

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
      <header>
        <h1>Ghajini Thoughts</h1>
      </header>
      <ul>
        {thoughts.map((thought) => {
          return <p key={thought.id}>{thought.text}</p>;
        })}
      </ul>
    </>
  );
}

export default App;
