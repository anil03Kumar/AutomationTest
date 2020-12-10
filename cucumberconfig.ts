import {Config} from "protractor";
import * as reporter from 'cucumber-html-reporter';


// An example configuration file
export let config = {
    // The address of a running selenium server.
   // seleniumAddress: 'http://localhost:4444/wd/hub',

   directConnect:true,
   framework:'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/demo.feature'],

    onComplete: () => {
      var options = {
              theme: 'bootstrap',
              jsonFile: './cucumberreport.json',
              output: './cucumberreport.html',
              reportSuiteAsScenarios: true,
              scenarioTimestamp: true,
              launchReport: true,
              metadata: {
                  "Application": "Calcultor Angular Test",
                  "Test Environment": "SYSTEM",
                  "Browser": "Chrome  87",
                  "Platform": "Windows 10",
                  "Executed": "Automation"
              }
          };
       
          reporter.generate(options);
          
        },

    cucumberOpts: {
        // require step definitions
        // tags: '@calculatortesting',
        format: 'json:./cucumberreport.json',
        
        

        require: [
          './stepDefinitions/*.js' // accepts a glob
        ]
      }
  
  };