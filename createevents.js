var mongoose = require('mongoose');
var eventsmodel = require('./eventsmodel.js');
var uuid = require('uuid4');
var secret = require('./secret.js');
module.exports.createevent = createevent = function(eventname, committee, description, title, place, venmo, fee, imageURL) {
    console.log('haha2');
    var db = mongoose.createConnection(secret.MONGOCREDENTIAL);
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        var id = uuid();
        var eventSchema = eventsmodel.getSchema();
        var EventModel = db.model('Events', eventSchema);
        var instance = new EventModel({ uniqueid:id, eventname:eventname, hostcommittee:committee, description:description, title:title, place:place, venmo:venmo, fee:fee, imageURL: imageURL });
        instance.save(function(err){
            if(err){
               console.log('Error while creating a new event');
            }
            else {
                console.log('successful');
            }
        });
      // we're connected!
    });
};
