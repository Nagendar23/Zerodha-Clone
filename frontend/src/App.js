import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup"; // make sure you have Signup.jsx
import Dashboard from "./dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
