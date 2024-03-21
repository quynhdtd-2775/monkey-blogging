import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./layout/DashboardLayout";
import CategoryPage from "./pages/CategoryPage";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div>
      {/* <AuthProvider> */}
      <Routes>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        {/* <RouterProvider router={router}></RouterProvider> */}
        <Route element={<DashboardLayout></DashboardLayout>}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/manage/posts" element={<PostPage />}></Route>
          <Route path="/manage/add-post" element={<></>}></Route>
          <Route path="/manage/update-post" element={<></>}></Route>
          <Route path="/manage/category" element={<CategoryPage />}></Route>
          <Route path="/manage/add-category" element={<></>}></Route>
          <Route path="/manage/update-category" element={<></>}></Route>
          <Route path="/manage/user" element={<UserPage />}></Route>
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
