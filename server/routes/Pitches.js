const Pitch = require('./../db/Pitches');

module.exports.getPitches = (req, res, next) => {
  const { q, pitchId, cat } = req.query;
  if (q === 'all') {
    if(req.session.passport) {
      Pitch.getAllPitches(req.session.passport.user.rows[0].id)
        .then(results => res.status(200).send(results.rows))
        .catch(error => res.status(404).json(error));
    } else {
      Pitch.getAllPitches(null)
        .then(results => res.status(200).send(results.rows))
        .catch(error => res.status(404).json(error));
    }
  } else if (q === 'pitch') {
    Pitch.getPitchByPitchId(pitchId)
      .then(results => res.status(200).send(results.rows))
      .catch(error => res.status(404).send('error in getting pitch ', error));
  } else if (q === 'cat') {
    Pitch.getPitchByCategoryId(cat)
      .then(results => res.send(results.rows))
      .catch(error => res.status(404).send('error in sorting by category', error));
  } else {
    res.status(404).send('Bad query');
  }
}

module.exports.postPitches = (req, res, next) => {
  const {user_id, name, video, website, profile, blurb, category_id} = req.body;
  Pitch.addPitch(user_id, name, video, website, profile, blurb, category_id)
  .then(results => res.statu(200).send('Pitch created!'))
  .catch(error => res.status(404).send('Error occcured: Pitch not created'));
}

module.exports.putPitches = (req, res, next) => {
  const {pitchId, userId, newName, video, website, profile, blurb, catId} = req.body;
  Pitch.updatePitchByPitchId(pitchId, userId, newName, video, website, profile, blurb, catId)
  .then(results => res.status(200).send('Pitch edited!'))
  .catch(error => res.status(404).send('Error occurred: Pitch no edited ' + error));
}


module.exports.deletePitches = (req, res, next) => {
  const { pitchId } = req.body;
  Pitch.deletePitch(pitchId)
      .then(results => res.status(200).send('Pitch deleted!'))
      .catch(error => res.status(404).send('Error occurred: Pitch not deleted'));
}