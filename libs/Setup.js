
function Setup() {
	// clear console
	this.clear = '\033[2J';

	// ANSI COLOR codes
	this.success  = '\033[32m';  // green 
	this.fail     = '\033[91m';  // soft red ( \033[91m would give stark red)
	this.normal   = '\033[0m';   // normal
}

module.exports = new Setup();
