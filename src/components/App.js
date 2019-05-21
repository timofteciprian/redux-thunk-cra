import React, { Component } from "react";
import ItemList from "./ItemList";
import Header from "./Header";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ItemList />
      </div>
    );
  }
}
