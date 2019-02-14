const multer = require('multer');
const AWS = require('aws-sdk');
const express = require('express');
const circular = require('circular-json');
const app = express();
const secret = require('./secret.js');
const awskeyid = secret.accessKeyId;
const awskeyaccesskey = secret.awskeyaccesskey;
module.exports = function(req, callback) {
    //console.log('what form is this: ' + circular.stringify(req));
    AWS.config = new AWS.Config();
    AWS.config.accessKeyId = awskeyid;
    AWS.config.secretAccessKey = awskeyaccesskey;
    const s3 = new AWS.S3({params: {Bucket: 'kseaatcal'}});
    var filename = new Date();
    var directory = 'photos/'+filename.toString()+'.jpg';

    var buff = new Buffer(req.body.data_uri.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    var data = {
        Key: directory,
        Body: buff,
        ContentEncoding: 'base64',
        ContentType: req.body.filetype
    };
    s3.putObject(data, function(err, data) {
      if (err) {
        console.log(err);
        console.log('Error uploading data: ', data);
        return callback(err);
      } else {
        console.log('succesfully uploaded the image!');
        return callback(null, directory);
      }
    });


};

