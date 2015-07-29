
var driver = require('selenium-webdriver');

var deferred = driver.promise.defer();
deferred.then(function(data){
	console.log("I am the promised action - the data passed to me was: " + data);
});

setTimeout(function() {
	deferred.fulfill('engineering report - shields at 50% captain');

}, 4000);
