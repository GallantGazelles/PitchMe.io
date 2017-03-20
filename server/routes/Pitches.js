const Pitch = require('./../db/Pitches');

module.exports.getPitches = (req, res, next) => {
  const { q, pitchId, cat } = req.query;

  if (q === 'all') {
    Pitch.getAllPitches()
      .then(results => res.send(results.rows))
      .catch(error => res.send('error in getting pitches' , error));
  } else if (q === 'pitch') {
    Pitch.getPitchByPitchId(pitchId)
      .then(results => res.send(results.rows))
      .catch(error => res.send('error in getting pitch ', error));
  } else if (q === 'cat') {
    Pitch.getPitchByCategoryId(cat)
      .then(results => res.send(results.rows))
      .catch(error => res.send('error in sorting by category', error));
  } else {
    res.send('Bad query');
  }
}

module.exports.postPitches = (req, res, next) => {
  const {userId, name, video, website, profile, blurb, catId} = req.body;
  Pitch.addPitch(userId, name, video, website, profile, blurb, catId)
  .then(results => res.send('Pitch created!'))
  .catch(error => res.send('Error occcured: Pitch not created'));
}

module.exports.putPitches = (req, res, next) => {
  const {pitchId, userId, newName, video, website, profile, blurb, catId} = req.body;
  Pitch.updatePitchByPitchId(pitchId, userId, newName, video, website, profile, blurb, catId)
  .then(results => res.send('Pitch edited!'))
  .catch(error => res.send('Error occurred: Pitch no edited ' + error));
}


module.exports.deletePitches = (req, res, next) => {
  const { pitchId } = req.body;
  Pitch.deletePitch(pitchId)
      .then(results => res.send('Pitch deleted!'))
      .catch(error => res.send('Error occurred: Pitch not deleted'));
}