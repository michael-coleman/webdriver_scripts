
// pull in setup helpers
var setup = require('../../mikeco_packages/webdriverjs_setup/libs/Setup');

var helpers = require('./Helpers');

var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox())
					.build();

// Clear the console, then
// print the action / assertion - BEFORE the webdriver performs the
// action so you know the context webdriver is behaving in.
//
console.log(setup.clear);
console.log('The public home/index page should load without problems when requested');
driver.get(helpers.base_url);
driver.sleep(helpers.sleepTime)


.then(function() {
	console.log('\nThe sign in page load should when requested');
});
// give a few seconds to read and understand assertion
driver.sleep(helpers.sleepTime);
driver.get(helpers.base_url + '/login/display-form');
driver.sleep(helpers.sleepTime)


.then(function() {
	console.log('\nThe signin form should reject with bad username and password');
});
driver.sleep(helpers.sleepTime);
driver.findElement({name : 'login'}).then(function(input) {
	input.sendKeys('bad username');
});
driver.findElement({name : 'password'}).then(function(input) {
	input.sendKeys('bad pass');
	driver.sleep('2500');
	input.sendKeys(webdriver.Key.ENTER);
});
driver.sleep(helpers.sleepTime).

then(function() {
	console.log('it should be responsive');
});
driver.sleep(helpers.sleepTime);
driver.manage().window().setSize(650, 600);
driver.sleep(helpers.sleepTime);