import React, {Component} from 'react';
import Note from './Note';

export default class Notes extends Component {
    render () {
        const notes = this.props.items;

        return <ul className="notes">{notes.map(this.renderNote)}</ul>;
    }

    renderNote = (note) => {
        return (
            <li className="note" key={note.id}>
                <Note
                    task={note.task}
                    onEdit={this.props.onEdit.bind(null, note.id)} />
            </li>
        );
    }
}
