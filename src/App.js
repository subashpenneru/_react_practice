import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Sai', age: 24 },
      { name: 'Subash', age: 25 },
      { name: 'Nani', age: 26 }
    ]
  }

  switchNameHandler = (newName) => {
    
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: 'Subash', age: 25 },
        { name: 'Nani', age: 26 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Sai', age: 24 },
        { name: event.target.value, age: 25 },
        { name: 'Nani', age: 26 }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I am a React Developer</h1>
        <button style={style} onClick={() => this.switchNameHandler('Sai Subash')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Sai!')} 
          changed={this.nameChangedHandler} >
          My Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }

  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null,  `Hi, I'm a React Developer`));
}

export default App;