import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  addItem() {
    const newItem = {
      id: Date.now(),
      value: this.state.newItem.slice(),
    };

    //copy of current list of item
    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: "",
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter((item) => item.id != id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <h1>React Todo List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter todo items here"
            value={this.state.item}
            onChange={(event) =>
              this.updateInput("newItem", event.target.value)
            }
          ></input>
          <button onClick={() => this.addItem()}>Add</button>
          <br />
          <ul>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>x</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
