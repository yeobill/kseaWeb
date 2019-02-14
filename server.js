const express = require('express');
const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();
const localport = process.env.PORT || 4000;
const uploadtos3 = require('./uploadtos3');
//const loadevents = require('./loadevents');
const submittomongo = require('./submittomongo');
const circular = require('circular-json');
const cors = require('cors');
const path = require('path');
const secret = require('./secret');
const nodemailer = require('nodemailer');

app.use(cors());
app.use(express.static(__dirname + '/build'));
//app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb'}));


app.post('/uploadtos3', function(req, res) {
    uploadtos3(req, function(err, filename) {
        if (err) {
            res.status(400).end();
        } else {
            res.status(200).send(filename);
        }
    });
});
app.post('/createevent', function(req, res) {
    submittomongo.create(req, function(result) {
        if (result) {
            res.status(200).end();
        } else {
            res.status(400).end();
        }
    });
});
app.post('/submittomongo', function(req, res) {
    submittomongo(req, function(result) {
        if (result) {
            res.status(200).end();
        } else {
            res.status(400).end();
        }
    });
});
/*
app.post('/loadevents', function(req, res) {
    loadevents(req, function(result) {
        res.send(result);
    });
});*/

app.post('/getrecentsix', function(req, res) {
    submittomongo.getDateRecentSix(req, function(result) {
        if (result) {
            res.status(200).send(result);
        } else {
            res.status(400).end();
        }
    });
});

app.post('/getpastthree', function(req, res) {
    submittomongo.getDatePastThree(req, function(result) {
        if (result) {
            res.status(200).send(result);
        } else {
            res.status(400).end();
        }
    });
});

app.post('/geteventsthismonth', function(req, res) {
    submittomongo.getEventThisMonth(req.body, function(result) {
        if (result) {
            res.status(200).send(result);
        } else {
            res.status(400).end();
        }
    });
});

app.get('/img/:imgurl', function(req, res) {
    console.log(__dirname +'/photos/'+ req.params.imgurl+'.jpg');
    res.sendFile(__dirname +'/photos/' + req.params.imgurl+'.jpg');
});

app.post('/feedback', function(req, res) {
    console.log('sending email');
    nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'Yahoo',
            port:465,
            auth: {
                user: 'kjw9411@yahoo.com', // generated ethereal user
                pass: 'Kjw9988111' // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: 'kjw9411@yahoo.com', // sender address
            to: 'kseaatcal@gmail.com', // list of receivers
            subject: 'INQUIRY FROM KSEA WEBSITE', // Subject line
            text: req.body.content + ' FROM: ' + req.body.email
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(400).send(err);
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.status(200).send(null);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });

});

/*
app.post('/loadevents', function(req, res) {
    loadevents(req, function(result) {
        res.send(result);
    });
});*/

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(localport, function() {
    console.log('the localport is ' + localport);
});
