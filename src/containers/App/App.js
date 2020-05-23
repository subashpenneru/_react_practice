import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../../components/Persons/Persons';
import Cockpit from '../../components/Cockpit/Cockpit';
import Aux from '../../hoc/Auxilary';
import withClass from '../../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);
        this.state = {
            persons: [
                { id: 'adef1', name: 'Sai', age: 24 },
                { id: 'adef2', name: 'Subash', age: 25 },
                { id: 'adef3', name: 'Nani', age: 26 }
            ],
            showPersons: false,
            authenticated: false
        }
    }

    UNSAFE_componentWillMount() {
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount()');
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState)
    //     return nextState.persons !== this.state.persons || 
    //         nextState.showPersons !== this.state.showPersons;
    // }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('[DERIVED App.js] Inside getDerivedStateFromProps', nextProps, prevState);
        return prevState;
    }

    // getSnapshotBeforeUpdate() {
    //     console.log('[SNAPSHOT App.js] Inside getSnapshotbeforeUpdate');
    // }

    componentDidUpdate() {
        console.log('[UPDATE App.js] Inside componentDidUpdate()');
    }

    // state = {
    //   persons: [
    //     { id: 'adef1', name: 'Sai', age: 24 },
    //     { id: 'adef2', name: 'Subash', age: 25 },
    //     { id: 'adef3', name: 'Nani', age: 26 }
    //   ],
    //   showPersons: false
    // }

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
        // const doesShow = this.state.showPersons;
        // this.setState({ showPersons: !doesShow });
        this.setState((prevState, props) => {
            return {
                showPersons: !prevState.showPersons
            }
        })
    }

    loginHandler = () => {
        this.setState((prevState, props) => {
            return {
                authenticated: true
            }
        });
    }

    render() {
        console.log('[App.js] Inside render()')
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler} />
        }

        return (
            <Aux>
                <button onClick={() => { this.setState({ showPersons: true }) }}>
                    Show Persons
                </button>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    login={this.loginHandler}
                    togglePersons={this.togglePersonsHandler}
                    title={this.props.title} />
                <AuthContext.Provider value={this.state.authenticated}>
                    {persons}
                </AuthContext.Provider>
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
