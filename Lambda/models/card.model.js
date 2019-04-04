const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let CardSchema = new Schema({
    code: { type: Number, required: true },
    names: { type: Array, required: true },
    email: { type: String, required: true},
    rsvp: { type: Boolean, required: true },
    numGuests: { type: Number, required: true },
    attending: { type: Boolean, required: true}
});

module.exports = mongoose.model('Card', CardSchema);