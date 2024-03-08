import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/panel";
import Course from "./pages/course/Course";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  {
    path: "/blog/*",
    element: <Blog />,
    children: [
      { path: "javascript", element: <h2>javascript article</h2> },
      { path: "react", element: <h2>react article</h2> },
      { path: "css", element: <h2>css article</h2> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/panel", element: <Panel /> },
  { path: "/course/:courseId", element: <Course /> },
];

export default routes;
