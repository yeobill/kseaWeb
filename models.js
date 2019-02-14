const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
    Events: {
        EventsModel: new Schema({
            eventname: {
                type: String,
                required: true
            },
            committee: String,
            description: String,
            place: String,
            venmo: String,
            fee: Number,
            date: {
                type: Date,
                required: true
            },
            imageURL: String
        })
    }
};
