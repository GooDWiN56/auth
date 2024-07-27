import PrivateRouter from "components/PrivateRouter";
import HomePage from "pages/HomePage";
import SiginPage from "pages/SiginPage";
import RegisterPage from "pages/RegisterPage";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/login" replace={true} />} />
      <Route path="/login" element={<SiginPage />} />

      <Route
        index
        path="/"
        element={
          <PrivateRouter>
            <HomePage />
          </PrivateRouter>
        }
      />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
