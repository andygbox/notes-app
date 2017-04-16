import mongoose from "mongoose";

import '../models/Notes';

const Notes = mongoose.model('Notes');

export function setUpConnection() {
    mongoose.connect(`mongodb://localhost/dbnotes`);
}

export function listNotes() {
    return Notes.find();
}

export function createNotes(data) {
    const notes = new Notes({
        title: data.title,
        text: data.text,
        color: data.color,
        created: new Date()
    });

    return notes.save();
}

export function deleteNotes(id) {
    return Notes.findById(id).remove();
}