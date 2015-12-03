import uuid from 'node-uuid';
import React, {Component} from 'react';
import Notes from './Notes.jsx';

const notes = [
    {
        id: uuid.v4(),
        task: 'Learn webpack'
    },
    {
        id: uuid.v4(),
        task: 'Learn React'
    },
    {
        id: uuid.v4(),
        task: 'Do laundry'
    }
];

export default class App extends Component {
    render () {
        return (
            <div>
                <Notes items={notes} />
            </div>
        );
    }

};
