const Card = require('../models/card.model')

exports.create_card = function (req, res) {
  let card = new Card(
    {
      code: req.body.code,
      names: req.body.names,
      rsvp: req.body.rsvp,
      email: req.body.email,
      numGuests: req.body.numGuests,
      attending: req.body.attending
    }
  )

  card.save(function (err) {
    if (err) return next(err);
    res.send(card);
  });
};

exports.card_details = function (req, res) {
  Card.findOne({ code: req.params.code }, function(err, card) {
    if (err) return next(err);
    res.send(card);
  });
};

exports.all_card_details = function (req, res) {
  Card.find({}, function(err, card) {
    if (err) return next(err);
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"); 
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.send(card);
  });
};

exports.update_card = function (req, res) {
  Card.findOneAndUpdate({ code: req.params.code }, { $set: req.body }, function(err, card) {
    if (err) return next(err);
    if (card == null) {
      res.status(400);
      res.send('Invalid Code!');
    }
    else {
      res.send(new Card(req.body));
    }
  });
};