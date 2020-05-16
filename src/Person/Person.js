import React from 'react';
import classes from './Person.css';

const person = (props) => {
    let child = props.children ? <p> { props.children } </p> : null;

    let rndm = Math.random();
    if(rndm > 0.6) {
        throw new Error(`${rndm}`);
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm { props.name } and I am { props.age } years old!</p>
            { child }
            <input type="text" onChange={ props.changed } value={ props.name } />
        </div>
    )
}

export default person;