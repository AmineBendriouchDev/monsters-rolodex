import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value;

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;

    const { onSearchChange } = this;

    // Get filtered Monsters
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toUpperCase().includes(searchField.toUpperCase())
    );

    return (
      <div>
        <input
          type="text"
          placeholder="Search monsters"
          onChange={onSearchChange}
        />
        {filteredMonsters.map((monster) => {
          return <h2 key={monster.id}>{monster.name}</h2>;
        })}
      </div>
    );
  }
}

export default App;
