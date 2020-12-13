'use strict';

var properties = require('../package.json');
var tt = require('../tt');

var controllers = {
    about: function(req, res){
        var aboutInfo = { name:properties.name, version: properties.version }
        res.json(aboutInfo);
    },
    tt_info: function(req, res){
        tt.find(req, res, function(err, info){
            if(err)
                res.send(err);
            res.json(info);
        });
    },
};

module.exports = controllers;
