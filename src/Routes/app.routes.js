import { AnimatePresence } from "framer-motion";
import React from "react";

import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes
        location={location}
        key={location.pathname}
      >
        <Route
          path="/"
          exact
          element={<Login />}
        />
        <Route
          path="/signUp"
          element={<SignUp />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
