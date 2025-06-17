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
    And the form features 13 input fields and a submit button

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

   Scenario: Relevant and typo free form field labels are displayed
    Then the form features relevant labels for each field:
      | Field              | Label                        |
      #--------------------#------------------------------#
      | First Name         | First Name (mandatory)       |
      | Last Name          | Last Name (mandatory)        |
      | Email              | Email (mandatory)            |
      | Password           | Password (mandatory)         |
      | Confirm Password   | Confirm Password (mandatory) |
      | Gender             | Gender (optional)            |
      | Date of Birth      | Date of Birth (optional)     |
      | Phone number       | Phone Number (optional)      |
      | Address            | Address (optional)           |
      | LinkedIn           | LinkedIn URL (optional)      |
      | Github             | GitHub URL (optional)        |

  Scenario: Form is submitted complete with expected field values
    When all form fields are filled in with correct values
    And the form is submitted
    Then the form fields are reset to empty

  # Scenario Outline: Validation error is raised when filling in incorrect field values
  #   When the form "<field>" contains an incorrect value
  #   And the form is submitted
  #   Then an error popup is displayed

  #   Examples:
  #     | Field              |
  #     #--------------------#
  #     | First Name         |
  #     | Last Name          |
  #     | Email              |
  #     | Password           |
  #     | Confirm Password   |
  #     | Gender             |
  #     | Date of Birth      |
  #     | Phone number       |
  #     | Address            |
  #     | LinkedIn           |
  #     | Github             |
