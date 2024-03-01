import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CourseItem.css";

function CourseItem({ title, caption, image }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{caption}</Card.Text>
        <Button variant="primary">خرید دوره</Button>
      </Card.Body>
    </Card>
  );
}

export default CourseItem;
