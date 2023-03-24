import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
