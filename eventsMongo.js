var mongoose = require('mongoose');
var Model = require('./models.js');
var uuid = require('uuid4');
var secret = require('./secret.js');
var mongocredential = secret.MONGOCREDENTIAL;
var db = mongoose.createConnection(mongocredential);
db.on('error', console.error.bind(console, 'connection error:'));
var eventSchema = Model.Events.EventsModel;
var EventModel = db.model('Events', eventSchema);

module.exports.event = event = {
    create: function(eventname, committee, fee, place, date, description, venmo, imageURL) {
        if ((eventname.indexOf('birthday') !== -1 || eventname.indexOf('Birthday') !== -1) && imageURL === "") {
            imageURL = "_default_birthday";
        }
        if (imageURL === "") {
            imageURL = "_default";
        }
        var instance = new EventModel({eventname:eventname, committee:committee, description:description, place:place, venmo:venmo, fee:fee, date:date, imageURL: imageURL });
        instance.save(function(err) {
            if (err) {
                console.log(err);
               console.log('Error while creating a new event');
            }
            else {
                console.log('successful');
            }
        });
          // we're connected!
    }
    , getDateRecentSix: function(callback) {
        EventModel.find({date: {$gte: new Date()}}).sort({date:1}).limit(6).exec(function(err, docs) {
            if (err) {
                return callback(err);
            } else {
                //console.log('found: ' + docs);
                return callback(null, docs);
            }
        });
    }
    , getDatePastThree: function(callback) {
        EventModel.find({date: {$lt: new Date()}}).sort({date:-1}).limit(3).exec(function(err, docs) {
            if (err) {
                console.log(err);
                return callback(err);
            } else {
                //console.log(docs);
                return callback(null, docs);
            }
        });
    }
    , getEventThisMonth: function(date, callback) {
        console.log(date);
        var dateObj = new Date(date);
        var start = new Date(dateObj.getFullYear(), dateObj.getMonth());
        var end = start;
        if (dateObj.getMonth() === 11) {
            end = new Date(dateObj.getFullYear()+1, 0);
        } else {
            end = new Date(dateObj.getFullYear(), dateObj.getMonth()+1);
        }
        EventModel.find({date: {$gte:start, $lt:end}}).exec(function(err, docs) {
            if (err) {
                console.log(err);
                return callback(err);
            } else {
                console.log(docs);
                return callback(null, docs);
            }
        });
    }
};
