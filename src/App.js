import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
//import Card from './components/card-list/card.component';
class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "loding...",
          id: '1'
        },

      ],


      searchField: ''

    }


    this.handleChange = this.handleChange.bind(this)

  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }



  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }



  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    console.log(filteredMonsters);
    return (
      <div className="App">



        <div className="container">
          <SearchBox placeholder='search monsters'
            handleChange={this.handleChange}
          />
          <CardList monsters={filteredMonsters} />
        </div>


      </div >
    );


  }

}

export default App;
