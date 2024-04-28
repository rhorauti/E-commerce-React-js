import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/signup";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
