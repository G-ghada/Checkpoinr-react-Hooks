import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import MoviesList from "./MoviesList";

function Details() {
  const [movies, setMovies] = useState(data);
 let fontBold = { fontWeight: "bold" };
  let { id } = useParams();
  let movie = movies.find((element) => element.id == id);
  console.log(movies);
  return (
    <div key={movie.id} className="product-single">
      <Card className="movie-item" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.cover} width={250} height={430} />
        <Card.Body>
          <Card.Title style={{ height: 50, color: "#0f062e" }}>
            {movie.title}
          </Card.Title>
          
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <span style={fontBold}> Cast : </span> {movie.cast}
          </ListGroup.Item>
          <ListGroup.Item>
            <span style={fontBold}> Rate : </span>
            {movie.rate}
          </ListGroup.Item>
          <ListGroup.Item>
            <span style={fontBold}> Category : </span> {movie.category}
          </ListGroup.Item>
          <ListGroup.Item>
            <span style={fontBold}>Release date : </span>
            {movie.release}
          </ListGroup.Item>
          <ListGroup.Item>
            <span style={fontBold}> Description : </span>
            {movie.description}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button type="button" id="btn">
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              to={`/MoviesList/${<MoviesList/>}`}
            >
              Back to list
            </Link>
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Details;