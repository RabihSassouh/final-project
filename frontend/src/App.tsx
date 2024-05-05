import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import SignUp from "./pages/Authentication/SignUp";
import Login from "./pages/Authentication/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<SignUp />} path="/sign-up"></Route>
        <Route element={<Home />} path="/"></Route>
      </Routes>
    </Router>
  );
}

export default App;
