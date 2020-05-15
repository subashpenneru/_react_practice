import React from 'react';
import './Person.css';

const person = (props) => {
    let child = props.children ? <p> { props.children } </p> : null;
    return (
        <div className="Person">
            <p onClick={props.click}>I'm { props.name } and I am { props.age } years old!</p>
            { child }
            <input type="text" onChange={ props.changed } value={ props.name } />
        </div>
    )
}

export default person;