import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
