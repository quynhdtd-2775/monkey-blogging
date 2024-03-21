import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <div>
      {/* <AuthProvider> */}
      <Routes>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route element={<DashboardLayout></DashboardLayout>}>
          <Route path="/dashboard" element={<></>}></Route>
          <Route path="/manage/posts" element={<></>}></Route>
          <Route path="/manage/add-post" element={<></>}></Route>
          <Route path="/manage/update-post" element={<></>}></Route>
          <Route path="/manage/category" element={<></>}></Route>
          <Route path="/manage/add-category" element={<></>}></Route>
          <Route path="/manage/update-category" element={<></>}></Route>
          <Route path="/manage/user" element={<></>}></Route>
          <Route path="/manage/add-user" element={<></>}></Route>
          <Route path="/manage/update-user" element={<></>}></Route>
          <Route path="/profile" element={<></>}></Route>
        </Route>
      </Routes>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
