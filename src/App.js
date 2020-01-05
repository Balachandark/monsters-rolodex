import React, { Component } from 'react';
import './App.css';

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
        <div className="search-wrapper">
          <input type="search" className="search" onChange={this.ChangeHandler} placeholder="Search Monsters..." />
        </div>
        <div className="monsters-wrapper">
            {
              filteredMonsters.map( users => {
                return(
                  <div className="monsters" key={users.username}>
                    <img
                      alt='monster'
                      src={`https://robohash.org/${users.id}?set=set2&size=180x180`}
                    />
                    <h2>{ users.name }</h2>
                    <p>{ users.email }</p>
                  </div>
                )
              } )
            }
        </div>
      </div>
    );
  }
}

export default App;
