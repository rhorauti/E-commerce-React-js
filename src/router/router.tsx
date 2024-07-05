import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/auth/signup";
import Login from "../pages/auth/login";
import Home from "../pages/home/home";
import NewPassword from "../pages/auth/newPassword";
import { PasswordRecover } from "../pages/auth/passwordRecover";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/password-recover" element={<PasswordRecover />} />
        <Route path="*" element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
