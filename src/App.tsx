import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { ChangeEvent } from "react";

import "./App.css";

import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

interface IProps {}
interface IState {
  monsters: Monster[];
  searchField: string;
}
class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((users) => this.setState(() => ({ monsters: users })));

    const fetchUser = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );

      this.setState(() => ({ monsters: users }));
    };
    fetchUser();
  }
  handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchField = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    const { monsters, searchField } = this.state;
    const { handleChange } = this;
    const filteredMonsters = monsters.filter((monster: Monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={handleChange}
          placeholder="Search monster..."
          className="monsters-search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
