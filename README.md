# webdriver setup scripts
A simpler replacement to the Jasmine test framework

******

## Install

1. Install webdriverjs using NPM: `npm install selenium-webdriver`
1. Create folder `mikeco_packages` in root of your project dir (if it doesnt exist)
1. keep your test code in your main project, and just require in from this lib as
needed
1. need to clone the `webdriverjs_setup` project into `mikeco_packages` and then pull
 as needed to receive updates.  
.  


add this to your main projects gitignore ** -actually is there any point to ignore this? **


```
# Ignore the mikeco_packages/webdriverjs_setup/ stuff 
# ** acutally I wouldnt trust any of this code at the moment!! 
# mikeco_packages/webdriverjs_setup/*
# !mikeco_packages/webdriverjs_setup/project/
```


## Usage

Require in Setup at the top of any scripts which you want to make use of it
```
var helpers = require('mikeco_packages/webdriverjs_setup/libs/Setup.js');

// Your test code here
```
You may want to create your own copy of the file: 
```
mikeco_packages/webdriverjs_setup/examples/Helpers.js
```
