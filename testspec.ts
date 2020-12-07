
import { browser, element, by } from "protractor";
import { AngularHomePage } from "./pageObjects/AngularHomePage";
import { calculator } from "./pageObjects/calculator";
describe('chain locators', function () {

    it('chain locators demo', async () => {
        let calc = new calculator();
        await browser.get('http://juliemr.github.io/protractor-demo/');

        await calc.firstEditBox.sendKeys("3");
        await calc.secondEditBox.sendKeys("5");
        await calc.go.click();
        await calc.getResult.getText().then(function (text) {

            console.log(text);

        })


    })

    it('Angular JS Page', async () => {

        let ah=new AngularHomePage();

        await browser.manage().window().maximize();
        await browser.get('https://angularjs.org/');
        await ah.linktext.click();
        await browser.sleep(3000);
        await ah.search.sendKeys("hello");
        
    })
})