import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      {/* <AuthProvider> */}
      <Routes>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
      </Routes>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
