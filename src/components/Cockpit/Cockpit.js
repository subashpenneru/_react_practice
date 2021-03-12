import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxilary';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = classes.Button;
    
    if(props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <Aux>
        <h1>Hi, I am a React Developer</h1>
        <p className={assignedClasses.join(' ')}>{props.title}</p>
        <button className={btnClass}
          onClick={props.togglePersons}>Toggle Persons</button>
        <button onClick={props.login}>Log in</button>
      </Aux>
    );
}

export default cockpit;