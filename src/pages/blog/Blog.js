import "./Blog.css";
import MyNavbar from "../../components/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";

function Blog() {
  return (
    <div className="articleWrapper">
      <MyNavbar></MyNavbar>
      <h1>صفحه مقالات</h1>
      <hr />
      <div className="btnContainer">
        <Link to="javascript" className="linkBtn">
          javascript article
        </Link>
        <Link to="react" className="linkBtn">
          react article
        </Link>
        <Link to="css" className="linkBtn">
          css article
        </Link>
      </div>
      <hr />

      <Outlet></Outlet>
    </div>
  );
}

export default Blog;
