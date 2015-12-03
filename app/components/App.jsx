import uuid from 'node-uuid';
import React, {Component} from 'react';
import Notes from './Notes.jsx';

export default class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            notes: [
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
            ]
        };
    }
    render () {
        const notes = this.state.notes;

        return (
            <div>
                <Notes items={notes} />
            </div>
        );
    }
};
