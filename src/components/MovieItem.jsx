import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Details from "./Details";

function MovieItem(props) {
  let fontBold = { fontWeight: "bold" };
  return (
    <Card className="movie-item" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.cover} width={250} height={430} />
      <Card.Body>
        <Card.Title style={{ height: 50, color: "#0f062e" }}>
          {props.title}
        </Card.Title>
        {/* <Card.Text>Cast : </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <span style={fontBold}> Cast : </span> {props.cast}
        </ListGroup.Item>
        <ListGroup.Item>
          <span style={fontBold}> Rate : </span>
          {props.rate}
        </ListGroup.Item>
        <ListGroup.Item>
          <span style={fontBold}> Category : </span> {props.category}
        </ListGroup.Item>
        <ListGroup.Item>
          <span style={fontBold}>Release date : </span>
          {props.release}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <button type="button" id="btn">
          <Link
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
            to={`/Details/${props.id}`}
          >
            See more
          </Link>
        </button>
      </Card.Body>
    </Card>
  );
}

export default MovieItem;
