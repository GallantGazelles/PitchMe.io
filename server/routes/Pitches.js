const Pitch = require('./../db/Pitches');

module.exports.getPitches = (req, res, next) => {
  var q = req.query.q;

  if (q = 'pitch') {
    Pitch.getAllPitches().then(results => res.send(results.rows));
  }
}