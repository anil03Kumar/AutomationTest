Feature: I am going to validate the calculator Application

@calculatortesting
Scenario Outline: Calculator Add functionality
Given I will navigate to "Calc" page
When I will add two numbers "<num1>" and "<num2>"
Then the output displayed should be "<result>"
Examples:
    | num1 | num2 | result |
    | 3  | 5 | 8  |
     | 6  | 4 | 10 |
      | 9  | 9 | 18  |

@Angulartesting
Scenario Outline: Validate Angular Web Page
Given I will navigate to "AngularJS" page
When I clicked on header link
And You will navigate to angular page
Then You will enter "<key>" in search box
Examples:
    |  key | 
    | hello |
    | hey |
    | hi |