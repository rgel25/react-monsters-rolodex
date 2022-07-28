import { Component } from "react";
import "./search-box.styles.css";

export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          className={`search-box ${this.props.className}`}
          onChange={this.props.onChangeHandler}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
