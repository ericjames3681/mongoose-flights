const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create
}

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    Flight.create(req.body);
    res.redirect('./flights/new');
}

