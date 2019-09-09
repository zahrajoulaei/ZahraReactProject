
import React from 'react';

const adam = (props)=> {
    return (
        <div>
        <h1 onClick={props.handleClick}>hello i am {props.name} and i have {props.age}years old</h1>
        <span >{props.children}</span>
        <input type="text" onChange={props.changed} />
        </div>

    )
};

export default adam;
