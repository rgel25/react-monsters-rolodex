import React, { Component } from "react";
import "./card.styles.css";

import { Monster } from "../../App";

interface IProps {
  monster: Monster;
}
interface IState {}

export default class Card extends Component<IProps, IState> {
  render() {
    const { name, email, id } = this.props.monster;
    return (
      <div key={id} className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
