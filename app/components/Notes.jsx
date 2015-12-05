import React, {Component} from 'react';
import Editable from './Editable.jsx';
import Note from './Note.jsx';

export default class Notes extends Component {
    render () {
        const notes = this.props.items;

        return <ul className="notes">{notes.map(this.renderNote)}</ul>;
    }

    renderNote = (note) => {
        return (
            <Note className="note" onMove={this.onMoveNote}
                id={note.id} key={note.id}>
                <Editable
                    value={note.task}
                    onEdit={this.props.onEdit.bind(null, note.id)}
                    onDelete={this.props.onDelete.bind(null, note.id)} />
            </Note>
        );
    }
    onMoveNote({sourceId, targetId}) {
        console.log('source', sourceId, 'target', targetId);
    }
}
