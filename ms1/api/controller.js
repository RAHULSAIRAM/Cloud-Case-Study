'use strict';

var properties = require('../package.json');
var fare = require('../tfare');

var controllers = {
    about: function(req, res){
        var aboutInfo = { name:properties.name, version: properties.version }
        res.json(aboutInfo);
    },
    tfare_info: function(req, res){
        fare.find(req, res, function(err, info){
            if(err)
                res.send(err);
            res.json(info);
        });
    },
};

module.exports = controllers;
