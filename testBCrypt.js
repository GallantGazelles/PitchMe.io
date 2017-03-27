const bcrypt = require('bcrypt');

const pwd = 'alison';
const pwd2 = 'alison2';
const pwdd = 'alison';
const saltRounds = 10;

bcrypt.hash(pwd, saltRounds)
.then((hash) => {
	console.log('hash is; ', hash);
	return hash;
}).then((hash) => {
	bcrypt.compare(pwdd, hash)
	.then((res) => {
		console.log('res is isi sis i: ', res);
	});
});



// let hashedpwd = bcrypt.genSalt(saltRounds, (err, salt) => {
// 	return bcrypt.hash(pwd, salt, (err, hash) => {
// 		console.log('hashedpwd for pwd: ', hash);
// 	});
// });

// console.log('hashedpwd: ', hashedpwd);

// bcrypt.compare(pwd2, hashedpwd, (err, res) => {
// 	console.log('res: ', res);
// });

// bcrypt.compare(pwdd, hashedpwd, (err, res) => {
// 	console.log('res: ', res);
// });


