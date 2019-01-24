import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import axios from "axios";
import "./App.css";
import Scroll from "./Scroll";

export default class App extends Component {
  state = {
    robots: [],
    searchField: ""
  };

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount = () => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log(response);
        this.setState({ robots: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}
