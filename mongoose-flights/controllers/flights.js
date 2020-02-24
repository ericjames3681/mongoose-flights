const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
}
function index(req, res) {
    res.render('flights/index', {
      flights: Flight.getAll()
    });
  }
function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    Flight.create(req.body);
    res.redirect('./flights/new');
}

