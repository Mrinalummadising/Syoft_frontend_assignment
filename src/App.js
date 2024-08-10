import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "./components/Signup";
import LoginPage from "./components/Login";
import DashboardPage from "./components/Dashboard";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/signup" replace />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
