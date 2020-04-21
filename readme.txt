=> Setting up the enviroment
    - mkdir webdriverio       //project folder

    - npm init -y // to start a node project

    - npm i --save-dev @wdio/cli  //for testRunner   --save(flag) local installation
                                                    -g(flag) global installation
    
    - ./node_modules/.bin/wdio config (-y)  // generate a configuration file to store webdriverIO settings
                                    -y(flag) for default options
                                    without -y(flag) you have to choose the tools required by yourself.

    - npm install webdriverio --save-dev

=> To add chai for assertions
    - npm install chai --save-dev

    - npm install chai-webdriverio --save-dev

    - go to wdio.config and add this to beforeTest
        -
        beforeTest: function (test, context) {
            const chai = require('chai')
            const chaiWebdriver = require('chai-webdrdiverio').default
            chai.use(chaiWebdriver(browser))

            global.assert = chai.assert
            global.expect = chai.expect
            global.should = chai.should
        },



=> To use npm test instead of ./node_modules/wdio/conf.js wdio/conf.js
    - go to package.json file
        add this to the scripts "test": "wdio", //wdio is the command it will look for wdio itself in the command

=> Before running the command for testing 'npm test' ensure :
   - chrome driver is set command (npm install chromedriver --save-dev)
   - allure report is installed (npm install -g allure-commandline --save-dev)

=> To create test suites

    - go to wdio.conf.js

        - create a new suite by adding this
            suites:{
                elements:['.src/test/suite/*.js'] //elements is the suite and it contains the address of the testsuites.
            },

    - go to package.json

        - Add the suite name to the scripts 
            for eg.  "elements":"./node_modules/.bin/wdio ./wdio.conf.js --suite elements"  //elements is the test suite


    - run the test suite using


=> to generate allure report
    - npm install @wdio/allure-reporter --save-dev //install allure-reporter as dev depencency

    - go to package.json 
        check if @wdio/allure-reporter is there

    - go to wdio.conf.js
        search for reporters under allure add disableWebdriverStepsReporting, and disableWebdriverStepsReporting as true.
        for eg:-
        reporters: [['allure', {outputDir: 'allure-results',
                    disableWebdriverStepsReporting: true,
                    disableWebdriverScreenshotsReporting: true,
        }]],

    - install allure commandline using
        - npm install -g allure-commandline --save-dev

        - allure generate [allure_output_dir] && allure open  //use this to generate allure html report and open it.

        - to take screenshot 
            Add Screenshots
                Screenshots can be attached to the report by using the takeScreenshot function from WebDriverIO in afterStep hook. First set disableWebdriverScreenshotsReporting: false in reporter options, then add in afterStep hook

                afterTest: function(test) {
                    if (test.error !== undefined) {
                    browser.takeScreenshot();
                    }
                }
                
=> To rerun test
    - put this.retries(2) at describe level in the js file use function() keyword and not the arrow notation ( )=>
    - For eg :- 
        describe('login page feature test', function(){
            this.retries(2)
                it('verify sign up link test', function(){
                assert.equal(true, loginPage.isSignUpLinkExist, 'SignUp link is not present')
            })
        })

    - Or in wdio.conf.js file inside the mochOpts block 
        - put retries: 4



=> how to upload to a git repository
    - git init // to initialize a git repository in your local system
     
    - git add . // to add the files staging area

    - git commit -m "Message for the commit " // commit your changes to the repository

    - git remote add origin https://github.com/https://github.com/chandrupsekar/wdio-test-framework // to add the github repository as a remote that you can then push your local repositroy changes

    - git push origin master (git push -u origin master) // to push the committed files to the github repository if you use (-u)flag it will remember your preferences for remote and brnch and you can simply use the command git push next time

    - git pull origin master // to pul the files from github to your local repository

    
=> working with node-any-jdbc
    - Although it is not necessary, but before you install the windows specific build tools, make sure you uninstall other `microsoft visual c++ 2005 redistributable` software from the machine. You can install it afterwards if require a specific version for other purpose.

    - 💡 [Windows Vista / 7 only] requires .NET Framework 4.5.1 (Currently not installed automatically by this package) Download and install it from [here](https://www.microsoft.com/en-us/download/details.aspx?id=40773)

    - Install all the required tools and configurations using Microsoft's windows-build-tools from an elevated PowerShell or CMD.exe (run as Administrator).

    - Note: If you are behind a
     specific corporate proxy, then you need to set some environment variables: ` setx NODE_TLS_REJECT_UNAUTHORIZED 0 `

    - npm install -g node-gyp

    - npm install -g --add-python-to-path --production windows-build-tools

    -  Wait for build tool to be installed and once done exit from that shell, launch another elevated PowerShell or CMD.exe (run as Administrator)

    - npm config set msvs_version 2015

=> To configure Jenkins
    -	If the repository is private generate SSH key and add it to Jenkins Under Credentials (Jenkins->Credentials->Add Credentials)
    -   Add the public ssh key under SSH Key 
    -   Configure Jenkins for shell under Jenkins-> Jenkins > Configure System Shell and point it to the location of sh.exe file found in their installation.
    -   Configure Jenkins for Git under Jenkins-> Jenkins > Configure Git Installation and point it to the location of git.exe file found in their installation.
    - 	For building node js applications Build->ExecuteShell. Enter the node js commands as like below
        npm install
        npm test
    -	Allure Report . To configure Allure report install the necessary plugins first by Manage Jenkins->Install Plugin
        Under Jenkins->Global Tool Configuration->Allure Commandline enter the allure commands
        allure generate
    -   For configuring allure report Under Post Build Actions –> Allure Report
    -   For enabling choice options install choice option plugin and configure build with build parameters