'use strict' ;
const controller = require('./controller');
module.exports = function(app){
    app.route('/about')
        .get(controller.about);
    app.route('/tfare/:trainnum/:frmstn/:tostn/:class')
        .get(controller.tfare_info);
};

