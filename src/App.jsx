import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VoiceVisualizerComponent from "./components/VoiceVisualizerComponent";

function Home({ userInput, setInput }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
      <textarea
        rows="10"
        cols="50"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type here..."
      />
      <div
        style={{
          whiteSpace: "pre-wrap",
          marginTop: "10px",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {userInput}
      </div>
    </div>
  );
}

function App() {
  const [userInput, setInput] = useState("");

  return (
    <Router>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/voice" style={{ marginRight: "10px" }}>
          Voice Visualizer
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Home userInput={userInput} setInput={setInput} />}
        />
        <Route path="/voice" element={<VoiceVisualizerComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
