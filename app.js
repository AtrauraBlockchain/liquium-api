'use strict';

var express = require('express');
var bodyParser = require('body-parser');


var app = express();
var port = 8080;


app.use(bodyParser.json());


var liquiumRT = require('liquium-contracts');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api/organization/:idOrganization', function (req, res, next) {
  if (req.query.voter) {
    if (!web3.isAddress(req.query.voter)) return next(new Error("Invalid voter address"));
    liquiumRT.getAllInfo(web3, req.params.idOrganization, req.query.voter,function(err, st) {
        if (err) return next(err);
        res.json(st);
    });
  } else {
    liquiumRT.getOrganizationInfo(web3, req.params.idOrganization, function(err, st) {
        if (err) return next(err);
        res.json(st);
    });
  }
});

app.get('*', function(req, res) {
    res.end('404');
});

app.use(function (err, req, res, next) {
    res.json({
        result: "ERROR",
        errorStr: err.toString()
    });
});

var server = app.listen(port, function() {
    var port = server.address().port;
    console.log('server listening at http://localhost:' + port.toString());
});
