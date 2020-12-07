import { Given, Then, When} from "cucumber";
import { browser } from "protractor";
import {calculator} from "../pageObjects/calculator.js";

let calc=new calculator();


 Given('I will navigate to calculator site',  async()=> {

    await browser.get('http://juliemr.github.io/protractor-demo/');
  
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


  