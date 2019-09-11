import React, { Component } from 'react';
import './App.css';
import Adam from './Adam/Adam';


class App extends Component {
    state = {
        adam: [
            {name: 'fariborz', age: 63},
            {name: 'abolfazl', age: 33},
        ],
        dispalyAdams : false
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

    toggleButton = ()=> {
        const showIt = this.state.dispalyAdams;
        this.setState({
            dispalyAdams : !showIt
        })

    }

    render() {

        const style= {
            backgroundColor : '#eee',
            fontSize: '12px',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '6px',
            outline : 'none'
        }
        return (
            <div className="App">
                <h1 className="App-title">Welcome to React app again and for the last time</h1>
                <button onClick={this.toggleButton} style={style}> Toggle Adams here!</button>
                { this.state.dispalyAdams ?
                    <div>
                    <Adam name={this.state.adam[0].name} age={this.state.adam[0].age} click={this.handleClick}/>
                    <Adam name={this.state.adam[1].name} age={this.state.adam[1].age} changed={this.inputChange}>lalaland</Adam>
                    <Adam name={'hadis'} age={18} click={this.handleClick}> sooski</Adam>
                </div>
                    :
                    null
                }
            </div>
        );

    }
}

export default App;
