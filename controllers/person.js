var Person = require('../models/person');

module.exports = function(req, res, next) {
	//res.send('Thank you!');
	var person = new Person({
		name: req.body.firstname,
		words: req.body.lastname,
	});
	person.save(function(err){
		if (err) throw err;
		console.log('saved!');
		Person.find({}, function(err, users) {
			if (err) throw err;

			res.render('index', {userinfos: users});
		});

	});
};
