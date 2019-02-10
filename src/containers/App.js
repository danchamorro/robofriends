import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import axios from "axios";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

import { setSearchField } from "../actions";

class App extends Component {
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

    return !this.state.robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect()(App);
