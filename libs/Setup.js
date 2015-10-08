
function Setup() {
	// clear console
	this.clear = '\033[2J';

	// ANSI COLOR codes
	this.success  = '\033[32m';  // green 
	this.fail     = '\033[91m';  // soft red ( \033[91m would give stark red)
	this.normal   = '\033[0m';   // normal
	this.yellow   = '\033[33m';   //
	this.magenta  = '\033[36m';
	
	/**
	 * scrolls to bottom of page (to be run in client)
	 */
	this.scroll_to_bottom = function() {
		
		var body = document.body;
		var html = document.documentElement;
		var pageheight = Math.max( body.scrollHeight, body.offsetHeight, 
		                   html.clientHeight, html.scrollHeight, html.offsetHeight );
		var scroll_dist = pageheight - window.innerHeight;
		
		var wd_callback = arguments[arguments.length - 1];
		
		var pointer = 0;
		(function cyndi_looper() {
			
			pointer = pointer + 1;
			
			window.scrollBy(0,1);
			
			if (pointer < scroll_dist) {
				setTimeout(cyndi_looper, 4)
			} else {
				wd_callback();
			}
			
		})();
		
	};
	
	/**
	 * Generic page check function
	 * @param webdriver - webdriver namespace
	 * @param driver    - instance of WebDriver class
	 * @param helpers   - quotenow e2e test helper service
	 * @param link_text - the inner text of a link which navigates to the page
	 * @param name      - name to be used in description of the page, e.g. 
	 *                    'about us' etc
	 * @param emulation - whether or not emulation is to be used (set this 
	 *                    to false for testing regular regular desktop browsers)
	 */
	this.basic_page_check = function(webdriver, driver, helpers, link_text, name, emulation) {
		
		
		// create flow object that has ability to manipulate webdriver command
		// queue
		var flow = webdriver.promise.controlFlow();
		
		
		flow.execute(function() {
			
			//-----------------------------------------------------------------------
			console.log('Navigation to ' + name + ' page should work\n');
			//-----------------------------------------------------------------------
			
		});
		driver.sleep(helpers.time_to_read);
		driver.findElement(webdriver.By.linkText(link_text)).click();
		driver.sleep(helpers.time_to_assess);
		
		flow.execute(function() {
			//-----------------------------------------------------------------
			console.log(name + ' page should be displayed correctly\n');
			//-----------------------------------------------------------------
		});
		driver.sleep(helpers.time_to_read);
		driver.executeAsyncScript(this.scroll_to_bottom);
		driver.sleep(helpers.time_to_assess);
		
		if (emulation === false) {
			
			flow.execute(function() {
				//------------------------------------------------------------------------------------
				console.log('Contact page should display properly with smaller viewport\n');
				//------------------------------------------------------------------------------------
			});
			driver.sleep(helpers.time_to_read);
			driver.manage().window().setSize(helpers.small_width, helpers.small_height);
			driver.findElement(webdriver.By.linkText(link_text)).click();
			driver.sleep(helpers.time_to_assess);
			driver.executeAsyncScript(this.scroll_to_bottom);
			driver.sleep(helpers.time_to_assess);
			
			// restore browser window sizes
			driver.manage().window().setPosition(0, 0);
			driver.manage().window().setSize(helpers.full_width, helpers.full_height);
			
		}
		
	}
	
	
}

module.exports = new Setup();
