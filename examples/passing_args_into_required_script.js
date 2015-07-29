
// If you defined - code to be run - within a function in this file
// and then exported it to a function var in the calling script
// you could then call it and it
// would be able to receive args via parameter 'a'.
module.exports = function(a) {
	console.log('code in required file starting..');
	console.log('a is ' + a);
};
