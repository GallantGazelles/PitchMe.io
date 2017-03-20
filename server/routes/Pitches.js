const Pitch = require('./../db/Pitches');

module.exports.getPitches = (req, res, next) => {
  let q = req.query.q;
  let id = req.query.pitchId;
  let cat = req.query.cat;

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

module.exports.postPitches = (req, res, next) => {
  let {userId, name, video, website, profile, blurb, category_id} = req.body;
  console.log(userId, name, video, website, profile, blurb, category_id);
  Pitch.addPitch(userId, name, video, website, profile, blurb, category_id)
  .then(results => res.send('Pitch created!'))
  .catch(error => res.send('Error occcured: Pitch not created'));
}
module.exports.putPitches = (req, res, next) => {

}

module.exports.deletePitches = (req, res, next) => {

}