const Card = require('../models/card.model')

exports.create_card = function (req, res) {
  let card = new Card(
    {
      code: req.body.code,
      names: req.body.names,
      rsvp: req.body.rsvp,
      numGuests: req.body.numGuests
    }
  );

  card.save(function (err) {
    if (err) return next(err);
    res.send(card);
  })
};

exports.card_details = function (req, res) {
  Card.findOne({ code: req.params.code }, function(err, card) {
    if (err) return next(err);
    res.send(card);
  })
};

exports.all_card_details = function (req, res) {
  Card.find({}, function(err, card) {
    if (err) return next(err);
    res.send(card);
  })
};

exports.update_card = function (req, res) {
  Card.findOneAndUpdate({ code: req.params.code }, { $set: req.body }, function(err, card) {
    if (err) return next(err);
    res.send(new Card(req.body));
  });
};