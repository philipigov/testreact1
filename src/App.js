import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
//import logo from './logo.svg';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchfield: e.target.value});
  };


  render() {
    const {monsters, searchField } = this.state;
    const filteredMonsters =
      monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <h1> List of Json data</h1>

        <SearchBox
        placeholder='search json'
        handleChange={e => this.setState({searchField: e.target.value})}
        />
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
