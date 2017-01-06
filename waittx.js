'use strict';

var async = require('async');

module.exports=function(_web3) {
    var web3 = _web3;

    var filter;

    var pendingTx = [];

    return function waitTx(txHash, cb) {
        if (!filter) {
            filter = web3.eth.filter('latest', function() {
                var curPendingTx = pendingTx;
                pendingTx = [];
                async.eachSeries(curPendingTx, checkTx);
            });
        }
        checkTx({
            txHash: txHash,
            cb: cb
        }, function() {});
    };

    function checkTx(tx, cb) {
        web3.eth.getTransactionReceipt(tx.txHash, function(err, res) {
            if (err) return cb(err);
            if (res) {
                tx.cb(null, res);
            } else {
                pendingTx.push(tx);
            }
            cb();
        });
    }
};
