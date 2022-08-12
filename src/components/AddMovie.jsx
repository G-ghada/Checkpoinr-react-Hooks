import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddMovie(props) {
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    props.setMovies([...props.movies, newMovie]);
    handleClose();
  };
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Add new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={(e) =>
                setNewMovie({
                  ...newMovie,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="movie title"
                autoFocus
              />
              <Form.Label>Movie Poster</Form.Label>
              <Form.Control
                type="text"
                name="cover"
                placeholder="paste your poster link here"
                autoFocus
              />
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                placeholder="set the category here"
                autoFocus
              />
              <Form.Label>Rate</Form.Label>
              <Form.Control type="number" min={0} name="rate" autoFocus />
              <Form.Label>Director</Form.Label>
              <Form.Control
                name="cast"
                type="text"
                placeholder="movie's Director"
                autoFocus
              />
              <Form.Label>Release Date</Form.Label>
              <Form.Control type="date" name="release" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
