import React from 'react';
import classes from './Adam.css';

const adam = (props)=> {
    return (
        <div className={classes.Adam}>
        <h1 onClick={props.click}>hello i am {props.name} and i have {props.age}years old</h1>
        <span >{props.children}</span>
        <input type="text" onChange={props.changed}/>
        </div>

    )
};

export default adam;
