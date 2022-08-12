import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import ReactStars from "react-stars";
function NavBar(props) {
  const resetRating = () => {
    props.setRating();
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand >Movie's Rate</Navbar.Brand>
        <ReactStars
          count={10}
          onChange={(newRating) => props.setRating(newRating)}
          size={34}
          value={props.rating}
          half={false}
          color2={"#c8ff00"}
        />
        <Navbar.Brand>{props.rating}</Navbar.Brand>
        <Button
          variant="secondary"
          onClick={() => {
            resetRating();
          }}
        >
          Restart
        </Button>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search movie title"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                props.setSearch(e.target.value);
              }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
