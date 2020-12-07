Feature: I am going to validate the calculator Application

Scenario: Calculator Add functionality

Given I will navigate to "Calc" page
When I will add two numbers "3" and "5"
Then the output displayed should be "8"

Scenario: Calculator Add functionality

Given I will navigate to "Calc" page
When I will add two numbers "6" and "4"
Then the output displayed should be "10"

Scenario: Validate Angular Web Page

Given I will navigate to "AngularJS" page
When I clicked on header link
And You will navigate to angular page
Then You will enter "hello" in search box
