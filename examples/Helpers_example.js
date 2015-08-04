//
// Project specific helpers go here (code thats reusable across projects
// should be in Setup.js)
//

function Helpers() {
	this.sleep = 3000;
	this.base_url = "http://localhost/some_project/public";
}

module.exports = new Helpers();
