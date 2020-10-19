import React from 'react';
import classes from "./cockpit.css";

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.dispalyAdams) {
        btnClass = classes.Red;
    }
    if (props.adam.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.adam.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    return(
        <div className = {classes.Cockpit}>
            <h1 className="App-title">Welcome to React app again and for the last time</h1>
            <p className={assignedClasses.join(' ')}>sometimes you see me bold,red or normal </p>
            <button onClick={props.clicked} className={btnClass}> Toggle Adams here!</button>
        </div>
    )
};

export default cockpit;
