import React from 'react';
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

const persons = (props) =>
    props.adam.map( (mapshode,index) =>
        {
            return <ErrorBoundary key= {mapshode.id}>
                <Person name = {mapshode.name}
                      age = {mapshode.age}
                      click = { ()=> props.clicked(index) }
                      changed = {(event)=> {props.changed(event, mapshode.id)} }/>
            </ErrorBoundary>
        }

    );
export default persons;
