import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'adef1', name: 'Sai', age: 24 },
      { id: 'adef2', name: 'Subash', age: 25 },
      { id: 'adef3', name: 'Nani', age: 26 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    const persons = [...this.state.persons];

    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }
  
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person 
              click={ () => this.deletePersonHandler(index) }
              name={ person.name } 
              age={ person.age } 
              key={ person.id }
              changed={ (event) => this.nameChangedHandler(event, person.id) } />
          }) }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React Developer</h1>
        <button style={style} onClick={ this.togglePersonsHandler }>Toggle Persons</button>
        { persons }
      </div>
    );
  }

  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null,  `Hi, I'm a React Developer`));
}

export default App;
