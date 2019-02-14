var mongoEvent = require('./eventsMongo.js');

module.exports.create = function(req, callback) {
    mongoEvent.event.create(req.body.title || "", req.body.committee || "", req.body.fee || 0, req.body.place || "", req.body.date || "", req.body.description||"", req.body.venmo || null, req.body.imageURL || "");
    //mongoEvent.event.getDateRecentSix();
    return callback('success');
};

module.exports.getDateRecentSix = function(req, callback) {
    mongoEvent.event.getDateRecentSix(function(err, result){
        if(err){
            return console.log('error getting 6 recent dates');
        }
        return callback(result);
    });
    //mongoEvent.event.getDateRecentSix();
};

module.exports.getDatePastThree = function(req, callback) {
    mongoEvent.event.getDatePastThree(function(err, result){
        if(err){
            return console.log('error getting 3 past dates');
        }
        return callback(result);
    });
    //mongoEvent.event.getDateRecentSix();
};

module.exports.getEventThisMonth = function(req, callback) {
    var dateinfo = req.dateinfo
    mongoEvent.event.getEventThisMonth(dateinfo, function(err, result){
        if(err){
            return console.log('error getting 3 past dates');
        }
        return callback(result);
    });
    //mongoEvent.event.getDateRecentSix();
};

