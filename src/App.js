import React, { Component } from 'react';
import './App.css';
import Adam from './Adam/Adam';


class App extends Component {
    state = {
        adam: [
            {name: 'fariborz', age: 63},
            {name: 'abolfazl', age: 33},
        ]
    }

     handleClick = () => {
        this.setState({
            adam: [
                {name: 'ziba', age: 63},
                {name: 'parisa', age: 33},
            ]}
        )
    };

    inputChange = (event)=> {
        this.setState({
            adam: [
                {name: event.target.value, age: 63},
                {name: 'parisa', age: 33},
            ]}
        )
    }

    render() {
        return (
            <div className="App">
                <h1 className="App-title">Welcome to React app again and for the last time</h1>
                <button onClick={this.handleClick}> click here</button>
                <Adam name={this.state.adam[0].name} age={this.state.adam[0].age} click={this.handleClick}/>
                <Adam name={this.state.adam[1].name} age={this.state.adam[1].age} changed={this.inputChange}>lalaland</Adam>
                <Adam name={'hadis'} age={18} click={this.handleClick}> sooski</Adam>
            </div>
        );

    }
}

export default App;
