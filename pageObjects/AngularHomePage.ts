import { ElementFinder,element,by } from "protractor";

export class AngularHomePage{

    linktext:ElementFinder;
    search:ElementFinder;

    constructor()
    {
        this.linktext=element(by.linkText("angular.io"));
        this.search=element(by.css("input[type='search']"));
    }
}