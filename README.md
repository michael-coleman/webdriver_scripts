
# webdriver setup scripts

#### A simpler alternative to the Jasmine test framework

This project has been designed to be used as a separate library/dependency rather
than a file or static script you might copy and paste into a project.  
The reason to keep this repo separate from a main parent project
 is because it is desirable to capture any updates or improvements that are made to 
this script back to a central repo - making those improvements available to other
projects.  
git is used to perform this job.  
It seems using git submodules would be too 
overkill/complex for this job as they seem to require communication back and 
forward between the parent and child repo, for the purpose of maintaining
some kind of reconciliation between the versions of parent and child
repos? (e.g. if you wanted to repoduce a bug you need to know exact versions of
parent and sub-repos).  
It may also be possible to gitignore the subprojects `.git` directory and therefore
automatically capture updates to the sub-repo into the parent - and therefore not have
to worry about having to `git clone` the sub-repos when re-deploying the parent
project to another build.  
However I dont forsee  this test framework  being
needed on the production server anyway, *so for the moment I'm using/developing it 
on the basis its an independant/isolated git sub-repo.*
The reason to create a `mikeco_packages` folder and put this repo into there is simply
in case I build any more packages like this in the future, this `mikeco_packages` would
be a placeholder directory. However I havent built any other projects like this, so
it would be reasonable to put this repo anywhere convienient.


-----------

## Installation / setup

* Install webdriverjs using NPM: `npm install selenium-webdriver --save-dev`
* create folder `mikeco_packages` in root of your project dir (if it doesnt exist)
* keep your test code in your main project, and just require in from this lib as
needed
1. need to clone the `webdriverjs_setup` project into `mikeco_packages` and then pull
 as needed to receive updates.  

### . 

* add this `webdriver_setup` folder to your main projects gitignore  
e.g.

```
# Main project .gitignore

# mikeco_packages/webdriverjs_setup/ stuff 
mikeco_packages/webdriverjs_setup/
```


## Usage

Require in Setup at the top of any scripts which you want to make use of it
```
var setup = require('mikeco_packages/webdriverjs_setup/libs/Setup.js');

// Your test code here
```
You may want to create your own copy of the file: 
```
mikeco_packages/webdriverjs_setup/examples/Helpers.js
```
