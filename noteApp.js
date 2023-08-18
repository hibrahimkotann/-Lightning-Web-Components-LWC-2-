import { LightningElement, track } from 'lwc';

export default class NoteApp extends LightningElement {
    @track notes = [];
    newNote = '';

    handleNoteChange(event) {
        this.newNote = event.target.value;
    }

    handleAddNote() {
        if (this.newNote.trim() !== '') {
            this.notes.push(this.newNote);
            this.newNote = '';
        }
    }
}
