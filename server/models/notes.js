import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NotesSchema = new Schema({
    title   : { type: String },
    text    : { type: String, required: true},
    color   : { type: String },
    created : { type: Date }
});

const Notes = mongoose.model('Notes', NotesSchema);
