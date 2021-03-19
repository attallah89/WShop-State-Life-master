import React from "react";
import { Button, Badge } from "react-bootstrap";
import "./counter.css";

class Counter extends React.Component {
  constructor() {
    console.log("Contructor ()");
    super();
    this.state = {
      counter: 0,
      timer: 0,
      intervall: null,
    };
  }

  componentDidMount() {
    console.log("Component Did Mount ()");
    console.log(this.state.intervall);
    this.setState({
      intervall: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      ),
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update ()");
    // console.log(this.state.intervall);
  }

  componentWillUnmount() {
    console.log("Component Will Unmount ()");
    clearInterval(this.state.intervall);
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    console.log("render () ");
    return (
      <>
        <div className="counter">
          <Button variant="primary" onClick={this.decrement}>
            -
          </Button>
          <span>{this.state.counter}</span>

          <Button variant="primary" onClick={this.increment}>
            +
          </Button>

          <Button variant="danger" onClick={this.reset}>
            Reset
          </Button>
        </div>

        <Badge variant="secondary" className="timer">
          Timer
        </Badge>

        <p>{`${Math.floor(this.state.timer / 3600)} : ${Math.floor(
          (this.state.timer % 3600) / 60
        )} : ${Math.floor((this.state.timer % 3600) % 60)}`}</p>
      </>
    );
  }
}

export default Counter;
