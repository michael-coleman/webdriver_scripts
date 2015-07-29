
var helpers = require('./mikes_tests/Helpers.js');


//--------------------------
// Start webdriver tests
//--------------------------
//

// Feature / User story - simply checking router component is working
// -----------------------
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder()
		.withCapabilities(webdriver.Capabilities.firefox()).build();

console.log(helpers.clear);
console.log('\nThe home page should load');
driver.get(helpers.base_url).then(function() {

});
driver.sleep(helpers.sleep).then(function() {
	console.log('\nThe help page should load');
});


driver.get(helpers.base_url + '/help' ).then(function() {
	//console.log(helpers.clear);

});
driver.sleep(helpers.sleep).then(function() {
	console.log('\nThe home page should load');
});

