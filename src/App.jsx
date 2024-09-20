import React from "react";
import Layout from "./Layout/Layout";
import './App.css';
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About_us from "./Page/About_us/About_us";
import Programme_Services from "./Page/Programme_Services/Programme_Services";
import Get_Involved from "./Page/Get_Involved/Get_Involved";
// import Dental_Treatment from "./Page/Dental_Treatment/Dental_Treatment";
import Login from "./Page/Login/Login";
import Home from "./Page/Home/Home";
import News_Updates from "./Page/News_Updates/News_Updates";
import Courses from "./Page/Courses/Courses";
import Blog from "./Page/Blog/Blog";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about-us" element={<About_us />} />
      <Route path="programme-services" element={<Programme_Services />} />
      <Route path="get-involved" element={<Get_Involved />} />
      {/* <Route path="dental-treatment" element={<Dental_Treatment />} /> */}
      <Route path="news-updates" element={<News_Updates />} />
      <Route path="courses" element={<Courses />} />
      <Route path="blog" element={<Blog />} />
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
