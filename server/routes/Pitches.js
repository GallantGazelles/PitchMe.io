const Pitch = require('./../db/Pitches');

module.exports.getPitches = (req, res, next) => {
  var q = req.query.q;
  var id = req.query.pitchId;
  var cat = req.query.cat;

  if (q === 'all') {
    console.log(q);
    Pitch.getAllPitches().then(results => res.send(results.rows)).catch(error => res.send('error in getting pitches' , error));
  } else if (q === 'pitch') {
    console.log(q);
    Pitch.getPitchByPitchId(id).then(results => res.send(results.rows)).catch(error => res.send('error in getting pitch ', error));
  } else if (q === 'cat') {
    console.log(q);
    Pitch.getPitchByCategoryId(cat).then(results => res.send(results.rows)).catch(error => res.send('error in sorting by category', error));
  } else {
    res.send('Bad query');
  }
}