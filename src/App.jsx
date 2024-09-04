import React from "react";
import Layout from "./Layout/Layout";
import './App.css';
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Plan from "./Page/Plan/Plan";
import Login from "./Page/Login/Login";
import Home from "./Page/Home/Home";
import TeacherRegistration from "./Page/Auth/TeacherRegistration";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="plan" element={<Plan />} />
      <Route path="teacher-registration" element={<TeacherRegistration />} />
      {/* login */}
      <Route path="login" element={<Login />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
