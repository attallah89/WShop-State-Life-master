import React from "react";
import { Navbar, Container } from "react-bootstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">COUNTER (Statful Component)</Navbar.Brand>
          <Navbar.Brand href="#">{this.props.date}</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
