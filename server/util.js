const crypto = require('crypto');


module.exports.createHash = (data, salt) => {
	return crypto.createHash('sha1').update(data + salt).digest('hex');
};

module.exports.createSalt = () => {
	return crypto.randomBytes(20).toString('hex');
};
