const db = require('./../db/Followers');

module.exports.getFollowers = (req, res, next) => {
  const q = req.query.q;
  const pitchId = req.query.pitchId
  const userId = req.query.userId;

  if (q === 'count' && pitchId) {
    // Example: /api/followers?q=count&pitchId=1234
    db.getPitchFollowerCount(pitchId)
      .then(results => res.send(results.rows))
      .catch(error => res.send(error));
  } else if (q === 'follows') {
    // Example: /api/followers?q=followst&pitchId=1234
    db.getPitchFollowers(pitchId)
      .then(results => res.send(results.rows))
      .catch(error => res.send(error));
  } else if (userId) {
    // Example: /api/followers?userId=5678
    db.getUserPitchFollows(userId)
      .then(results => res.send(results.rows))
      .catch(error => res.send(error));
  } else {
    res.send('Malformed query');
  }
};

module.exports.postFollower = (req, res, next) => {
  // TODO
  res.send('Todo');
};