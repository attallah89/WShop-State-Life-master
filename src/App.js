import React from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/NavBar";
import { Button } from "react-bootstrap";
import Pub from "./Components/Pub/Pub";

class App extends React.Component {
  constructor() {
    super();
    let today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    this.state = {
      show: false,
      date: date,
    };
  }

  setShow = () =>
    this.setState({
      show: !this.state.show,
    });

  render() {
    return (
      <div>
        <NavBar date={this.state.date} />
        <div className="mycounter">
          <Button variant="secondary" size="lg" onClick={this.setShow} block>
            {this.state.show ? "Hide Counter" : "Show Counter"}
          </Button>

          {/* { this.state.show && <Counter />} */}

          {this.state.show ? <Counter /> : <Pub />}
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
