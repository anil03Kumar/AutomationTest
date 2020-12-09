import {Before,After} from "cucumber";
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