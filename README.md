﻿# wdio-test-framework
 
 
 steps to follow:
 
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



=> To create test suites

    - go to wdio.conf.js

        - create a new suite by adding this
            suites:{
                elements:['./test/elements/*.js'] //elements is the suite and it contains the address of the testsuites.
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
                
=> To rerun failed test
    - put this.retries(2) at describe level in the js file
    - For eg :- 
        describe('login page feature test', ()=>{
            this.retries(2)
                it('verify sign up link test', ()=>{
                assert.equal(true, loginPage.isSignUpLinkExist, 'SignUp link is not present')
            })
        })
~
