import React from 'react';
import Radium from 'radium';
import './Adam.css';

const adam = (props)=> {
    const adamStyle= {
        '@media (min-width:500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Adam" style={adamStyle}>
        <h1 onClick={props.click}>hello i am {props.name} and i have {props.age}years old</h1>
        <span >{props.children}</span>
        <input type="text" onChange={props.changed}/>
        </div>

    )
};

export default Radium(adam);
