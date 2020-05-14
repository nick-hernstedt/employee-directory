import React, { Component } from "react";
import Table from "../../components/table";
import Navbar from "../../components/navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>

        <main className="container">
          <Table />
        </main>
      </div>
    );
  }
}

export default App;
