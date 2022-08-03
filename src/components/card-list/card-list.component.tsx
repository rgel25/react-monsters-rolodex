import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

import { Monster } from "../../App";

interface IProps {
  monsters: Monster[];
}
interface IState {}

class CardList extends Component<IProps, IState> {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
