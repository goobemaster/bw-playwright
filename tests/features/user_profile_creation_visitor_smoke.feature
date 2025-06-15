@smoke
Feature: First time visitor explores the User Profile Creation page

  Background:
    Given my browser reported location is within the EU
    And I am a visitor who just landed on the User Profile Creation page for the first time
    When the page is fully loaded

  Scenario: Landing on correct page
    Then the page title is: User Profile Creation
    And the browser title is: User Profile Creation
    And a form is present on the page
    And the form features input fields and a submit button

  Scenario: Correct form fields are displayed
    Then the form features the following input fields:
      | Field              | Type     |
      #--------------------#----------#
      | First Name         | Text     |
      | Last Name          | Text     |
      | Email              | Email    |
      | Password           | Password |
      | Confirm Password   | Password |
      | Gender Male        | Radio    |
      | Gender Female      | Radio    |
      | Gender Undisclosed | Radio    |
      | Date of Birth      | Date     |
      | Phone number       | Tel      |
      | Address            | Text     |
      | LinkedIn           | URL      |
      | Github             | URL      |

  