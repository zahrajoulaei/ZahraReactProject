import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/ Persons'
import Cockpit from '../components/cockpit/cockpit'


class App extends Component {
    state = {
        adam: [
            {id: 'zlxlzxzx', name: 'fariborz', age: 63},
            {id: 'dkf;dskfl#', name: 'abolfazl', age: 33},
            {id: 'fojisdj^', name: 'meti', age: 44}
        ],
        dispalyAdams : false
    };

    nameChangeHandler = (event , id)=> {
        const personIndex = this.state.adam.findIndex(p => {
            return p.id === id;
        });

        const person = {...this.state.adam[personIndex]};
        person.name = event.target.value;

        const adam = [...this.state.adam];
        adam[personIndex] = person;

        this.setState({adam: adam});
    };


    deleteAdamHandler = (personIndex)=> {
        const adam = [...this.state.adam];
        adam.splice(personIndex,1);
        this.setState({
        adam : adam
        });
    };

    toggleButton = () => {
        const showIt = this.state.dispalyAdams;
        this.setState({ dispalyAdams : !showIt })
    };

    render() {
        let adams = null;
        if (this.state.dispalyAdams) {
            adams = <Persons adam = { this.state.adam }
                         clicked = { this.deleteAdamHandler }
                         changed = { this.nameChangeHandler }/>;
        }
        return (
                <div className={classes.App}>
                    <Cockpit displayAdams = {this.state.dispalyAdams}
                             adam = {this.state.adam}
                             clicked = {this.toggleButton}/>
                    {adams}
                </div>
        );

    } 
}

export default App;
