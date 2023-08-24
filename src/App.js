import React, { useEffect } from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  // Function to create a new bat or ghost element
  function createBatOrGhost() {
    const isGhost = Math.random() < 0.5; // 50% chance of being a ghost
    const element = document.createElement("div");
    element.className = isGhost ? "ghost" : "bat";
    document.body.appendChild(element);

    // Animate the element
    const animationDuration = isGhost ? 15000 : 10000; // Ghosts move slower
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    const randomRotation = Math.random() * 360; // Random rotation for variety

    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;
    element.style.transform = `rotate(${randomRotation}deg)`;

    element.animate(
      [
        { transform: `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)` },
        { transform: `translate(${window.innerWidth}px, ${window.innerHeight}px) rotate(${randomRotation}deg)` },
      ],
      {
        duration: animationDuration,
        easing: "linear",
        iterations: Infinity,
      }
    );

    // Set the inner HTML to the emoji
    element.innerHTML = isGhost ? "👻" : "🦇";
  }

  // Create bats and ghosts on component mount
  useEffect(() => {
    const numberOfBatsAndGhosts = 10; // Adjust the number as needed
    for (let i = 0; i < numberOfBatsAndGhosts; i++) {
      createBatOrGhost();
    }
  }, []);

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="spooky-text">Spooky Dictionary</h1>
        </header>
        <main className="content">
          <Dictionary defaultKeyword="pumpkin" />
        </main>
        <footer className="App-footer">
          <p>
            This project was created by{" "}
            <a
              href="https://tourmaline-swan-eebbc0.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="author-link"
            >
              Sadia Mahmood
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/SadiaMahmoodMalik/Spooky-Dictionary/tree/master"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
