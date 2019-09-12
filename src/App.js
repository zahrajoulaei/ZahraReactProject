import React, { Component } from 'react';
import './App.css';
import Adam from './Adam/Adam';


class App extends Component {
    state = {
        adam: [
            {id: 'zlxlzxzx', name: 'fariborz', age: 63},
            {id: 'dkf;dskfl#', name: 'abolfazl', age: 33},
            {id: 'fojisdj^', name: 'meti', age: 44}
        ],
        dispalyAdams : false
    };

    nameChanger = (event , id)=> {
        const adamIndex = this.state.adam.findIndex(p =>{
            return p.id === id;
        });
        const person = {...this.state.adam[adamIndex]};
        person.name = event.target.value;

        const persons = [...this.state.adam];
        persons[adamIndex] = person;

        this.setState({adam: persons});
    };


    deleteAdamHandler = (adamIndex)=> {
        const adam = [...this.state.adam];
        adam.splice(adamIndex,1);
        this.setState({
        adam : adam
        });
    };

    toggleButton = ()=> {
        const showIt = this.state.dispalyAdams;
        this.setState({
            dispalyAdams : !showIt
        })
    };

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
                    {this.state.adam.map( (mapshode,index) =>
                    {
                        return <Adam name = {mapshode.name}
                                     age = {mapshode.age}
                                     click = { ()=> this.deleteAdamHandler(index) }
                                     key= {mapshode.id}
                                     changed = {(event)=> {this.nameChanger(event, mapshode.id)} }
                        />
                    })}
                 </div>
            )
        }
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
