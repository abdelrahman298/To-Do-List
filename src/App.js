import React, { Component } from 'react';
import Todoitems from "./components/Todoitems/Todoitems"
import Additems from "./components/Additems/Additems"
import "./index.css"
class App extends Component {
  state = {
    items: [
      { id: 1, name: "hama", age: 22 },
      { id: 2, name: "ahmed", age: 25 },
      { id: 3, name: "abdo", age: 27 }
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id)
    items.splice(i, 1)
    this.setState({ items })
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items: items })
  }

  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <Todoitems items={this.state.items} deleteItem={this.deleteItem} />
        <Additems addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
