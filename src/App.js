import React, { Component } from 'react';
import './App.css';
import CardList from './components/cardList/cardList';
import Search from './components/search/search';

class App extends Component{
  
  constructor() {
    super();
    this.state = {
      monsters: [],
      title: 'Monsters Rolodex',
      searchField: ''
    }
  }

  componentDidMount() {
    fetch( 'https://jsonplaceholder.typicode.com/users' )
    .then( response => response.json() )
    .then( users => 
      this.setState(
        { monsters: users }
      )
    )
  }

  ChangeHandler = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }
  
  render() {
    const { monsters, title: mainTitle, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="monsters-title">{mainTitle}</h1>
        <Search ChangeHandler={this.ChangeHandler}/>
        <CardList filteredMonsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
