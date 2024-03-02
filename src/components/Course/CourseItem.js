import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CourseItem.css";
import { Link } from "react-router-dom";

function CourseItem({ title, caption, image, id }) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={image}
        style={{ with: "100px", height: "200px" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{caption}</Card.Text>
        <Button variant="primary">
          <Link to={`/course/${id}`} className="buy-btn">
            خرید دوره
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CourseItem;
