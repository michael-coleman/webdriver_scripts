
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder()
	.withCapabilities(webdriver.Capabilities.firefox()).build();

//driver.get('http://trademe.co.nz');
driver.manage().window().maximize();
driver.get('http://www.trademe.co.nz/Browse/CategoryListings.aspx?mcatpath=%2ftrade-me-motors%2fcar-parts-accessories%2ftoyota&searchregion=12');
driver.findElement(webdriver.By.name('searchString')).then(function(input) {
	input.sendKeys('*hiace*');
	input.sendKeys(webdriver.Key.ENTER);
});

driver.sleep(5000);

driver.getTitle().then(function(title) {
	var expected_title = "TradeMe.co.nz - *hiace* for sale, New Zealand";
	//console.log('is the ACTUAL title what is expected?');
	//original escape  \e[33m
	console.log("\033[32m is the ACTUAL title what is expected? \033[0m");
	console.log("\033[31m this should be SOFT red \033[0m and this will be normal");
	if (title == expected_title) {
		console.log('SUCCESS')
	} else {
		console.log('FAIL');
	}
});

