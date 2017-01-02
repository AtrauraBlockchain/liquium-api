var express = require('express');
var app = express();
var port = 8080;

var liquiumRT = require('liquium-contracts');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

app.all('*', function(req, res, next) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    next();
});

app.get('/api/organization/:idOrganization/polls', function (req, res, next) {
    liquiumRT.getPolls(web3, req.params.idOrganization, function(err, polls) {
        if (err) return next(err);
        res.json(polls);
    });
});

app.get('*', function(req, res) {
    res.end('404');
});

server = app.listen(port, function() {
    var port = server.address().port;
    console.log('server listening at http://localhost:' + port.toString());
});
