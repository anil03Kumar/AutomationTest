import {Before,After, Status} from "cucumber";
import { browser } from "protractor";

Before({tags: "@calculatortesting"}, function () {

    browser.manage().window().maximize();
    
  });
  
  After({tags: "@calculatortesting"}, function () {
    
    console.log("Test is Completed");

  });
  
  Before({tags: "@Angulartesting"}, function () {

    console.log("First Test Done");
    
  });

 
  After(async function (scenario) {

    if(scenario.result.status=== Status.FAILED)

{
    const screenshot=await browser.takeScreenshot();
    this.attach(screenshot,"img/png");
}   
     
 });

 Status
