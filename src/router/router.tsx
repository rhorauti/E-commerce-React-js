import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/signup";
import Login from "../pages/login";
import Home from "../pages/home";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
