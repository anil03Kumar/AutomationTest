import { Given, Then, When} from "cucumber";
import { browser } from "protractor";
import { AngularHomePage } from "../pageObjects/AngularHomePage.js";
import {calculator} from "../pageObjects/calculator.js";

let calc=new calculator();
let ah = new AngularHomePage();


Given('I will navigate to {string} page', async(string)=> {
  if(string=="Calc")
  {
    await browser.get('http://juliemr.github.io/protractor-demo/');
  }
  else if(string=="AngularJS")
  {
    await browser.get('https://angularjs.org/');
  }
  
});



When('I clicked on header link',  async()=> {
  await ah.linktext.click();
  
});


When('You will navigate to angular page', async()=> {
  console.log("Navigated to next page successfully")
});


Then('You will enter {string} in search box', async(string)=> {
  await browser.sleep(3000);
  await ah.search.sendKeys(string);
});


  When('I will add two numbers {string} and {string}', async(string, string2)=>{
    
        await calc.firstEditBox.sendKeys(string);
        await calc.secondEditBox.sendKeys(string2);

  });

 
  Then('the output displayed should be {string}', async(string)=> {
   
    await calc.go.click();
    await calc.getResult.getText().then(function (text) {

        console.log(text);

    })

  });


  