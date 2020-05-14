import React, { Component } from "react";
import Axios from "axios";
import Loader from "../loading";
import ErrorAlert from "../error";
import TableRows from "./table-rows";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      count: 0,
      isLoading: true,
      error: "",
      search: "",
      directionOfSort: "descending",
    };
    this.sortBy = this.sortBy.bind(this);
  }

  componentDidMount() {
    Axios.get("https://randomuser.me/api/?seed=employee&results=30&nat=us")
      .then((res) => {
        this.setState({
          data: res.data.results,
          count: res.data.results.length,
          isLoading: false,
          error: "",
        });
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
          error: err.message,
        });
      });
  }

  sortBy(title) {
    const newArray = [...this.state.data];

    if (this.state.directionOfSort === "descending") {
      let sortedData = newArray.sort((a, b) => {
        if (a.name[title] < b.name[title]) return -1;
        if (a.name[title] > b.name[title]) return 1;
        return 0;
      });
      this.setState({
        data: sortedData,
        directionOfSort: "ascending",
      });
    } else {
      let sortedData = newArray.sort((a, b) => {
        if (a.name[title] > b.name[title]) return -1;
        if (a.name[title] < b.name[title]) return 1;
        return 0;
      });
      this.setState({
        data: sortedData,
        directionOfSort: "descending",
      });
    }
  }

  handleInputChange(event) {
    let query = event.target.value;
    this.setState({ search: query });
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          {this.state.isLoading === true && <Loader />}
          {this.state.error !== "" && <ErrorAlert error={this.state.error} />}
          {this.state.isLoading === false && this.state.count !== 0 && (
            <TableRows emplyData={this.state} sort={this} />
          )}
        </div>
      </div>
    );
  }
}

export default Table;
