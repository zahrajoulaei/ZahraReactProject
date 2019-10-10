import React, { Component } from 'react';
import classes from './App.css';
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
        let adams = null;
        let btnClass = '';
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
            );
                    btnClass = classes.Red;
        }

        const assignedClasses = [];
        if(this.state.adam.length<=2){
            assignedClasses.push(classes.red);
        }
        if (this.state.adam.length<=1){
            assignedClasses.push(classes.bold);
        }
        return (
                <div className={classes.App}>
                    <h1 className="App-title">Welcome to React app again and for the last time</h1>
                    <p className={assignedClasses.join(' ')}>sometimes you see me bold,red or normal </p>
                    <button onClick={this.toggleButton} className={btnClass}> Toggle Adams here!</button>
                    {adams}
                </div>
        );

    } 
}

export default App;
