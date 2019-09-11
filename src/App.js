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
        };
        let adams = null;
        if (this.state.dispalyAdams){
            adams =(
                <div>
                <Adam name={this.state.adam[0].name} age={this.state.adam[0].age} changed={this.inputChange}/>
                <Adam name={this.state.adam[1].name} age={this.state.adam[1].age} >lalaland</Adam>
                <Adam name={'hadis'} age={18} click={this.handleClick}> sooski</Adam>
            </div>
            )

        };
        return (
            <div className="App">
                <h1 className="App-title">Welcome to React app again and for the last time</h1>
                <button onClick={this.toggleButton} style={style}> Toggle Adams here!</button>
                {adams}
            </div>
        );

    }
}

export default App;
