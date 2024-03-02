import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/panel";
import Course from "./pages/course/Course";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/panel" element={<Panel></Panel>}></Route>
          <Route path="/course/:courseId" element={<Course></Course>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
