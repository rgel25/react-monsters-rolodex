import { Component, ChangeEvent } from "react";
import "./search-box.styles.css";

type Props = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default class SearchBox extends Component<Props> {
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
