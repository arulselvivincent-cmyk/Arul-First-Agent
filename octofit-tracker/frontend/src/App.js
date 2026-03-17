
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Table, Card, Modal, Form, Container, Row, Col } from 'react-bootstrap';


function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      {/* Bootstrap Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Octofit Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
              <Nav.Link href="#teams">Teams</Nav.Link>
              <Nav.Link href="#workouts">Workouts</Nav.Link>
              <Nav.Link href="#profile">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Row>
          <Col md={8}>
            {/* Bootstrap Heading */}
            <h1 className="mb-4">Welcome to Octofit Tracker</h1>

            {/* Bootstrap Table */}
            <h2 className="h4">Sample Activity Table</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Activity</th>
                  <th>Duration (min)</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Running</td>
                  <td>30</td>
                  <td>2026-03-17</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Cycling</td>
                  <td>45</td>
                  <td>2026-03-16</td>
                </tr>
              </tbody>
            </Table>

            {/* Bootstrap Button */}
            <Button variant="primary" className="me-2" onClick={handleShow}>
              Show Info Modal
            </Button>
            <Button variant="success" href="#learn-more">
              Learn More
            </Button>

            {/* Bootstrap Modal */}
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>About Octofit Tracker</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>This is a sample modal using Bootstrap in React.</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            {/* Bootstrap Form */}
            <h2 className="h4 mt-4">Log Activity</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formActivity">
                <Form.Label>Activity</Form.Label>
                <Form.Control type="text" placeholder="Enter activity" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDuration">
                <Form.Label>Duration (min)</Form.Label>
                <Form.Control type="number" placeholder="Enter duration" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={4}>
            {/* Bootstrap Card */}
            <Card>
              <Card.Body>
                <Card.Title>Leaderboard</Card.Title>
                <Card.Text>
                  1. Alice - 120 pts<br />
                  2. Bob - 110 pts<br />
                  3. Carol - 100 pts
                </Card.Text>
                <Button variant="info" href="#leaderboard">View Full Leaderboard</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
