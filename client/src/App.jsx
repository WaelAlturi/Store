import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
