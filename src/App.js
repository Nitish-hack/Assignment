import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login"
import SignUp from "./components/SignUp";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}  />
          <Route path="/register" element={<SignUp />}  />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
