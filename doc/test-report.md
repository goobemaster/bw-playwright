# Test Report

- [Results](#results)
- [Bugs](#bugs)
- [UAT & Recommendations](#uat--recommendations)

🔙 [Back to Main Page](../readme.md)

**Brief**

A set of [automated test scenarios](../tests/features/user_profile_creation_visitor_smoke.feature) have been created to verify the functionality of "[User Profile Creation](https://qa-assessment.pages.dev/)" page, based on the provided user story.

All tests are written in the Gherkin language, BDD style, which results in a human readable format.

The user story described:

- The complete set of fields expected to be featured on the form.
- The validation requirements associated with each individual field.
  - The need for accurate error handling.
- The distinction between mandatory and optional fields.

Assumptions during testing:

- Any excess fields other than described in the story would be considered a bug.
- Fields should have labels matching those in the story.
- Field labels should not have typos.
- Strictness of validation: always matching the examples given.
- The value of the two password fields shall match.
- Date of birth shall be in the past.
- The page and the form design to be responsive, and fully functional on smaller devices as well.

_All assumptions must be aligned on with the product owner, and tests shall be amended before final sign-off!_

# Results

**The implementation did not pass quality control.**

*Failing scenarios:*

- Correct form fields are displayed
- Relevant and typo free form field labels are displayed

📖 [Go to the Scenarios with steps](../tests/features/user_profile_creation_visitor_smoke.feature)

# Bugs

| Title                                             | Scenario Name                                          | Severity | Description/Comments                                                                                            |
|---------------------------------------------------|--------------------------------------------------------|----------|-----------------------------------------------------------------------------------------------------------------|
| Admin password exposed in HTML source             | -Manual exploratory-                                   | Critical | Checkup of hidden elements and critical variables in templates recommended, to see if there are similar issues. |
| Typo in label of Address field                    | Relevant and typo free form field labels are displayed | Low      | optioal -> optional                                                                                             |
| Typo in label of DOB field                        | Relevant and typo free form field labels are displayed | Low      | Date ofBirth -> Date of Birth                                                                                   |
| Confirm password field is in plain text           | Correct form fields are displayed                      | Critical | Password fields must always be masked for security reasons, to protect users from social engineering, etc.      |
| LinkedIn field should be optional                 | -Manual exploratory-                                   | High     | The form cannot be submitted with empty LinkedIn field, however the field shall be optional                     |
| Submit redirects to a url with exposed input data | -Manual exploratory-                                   | Critical | All user input (including password) is exposed as path parameters upon successful form submission               |
| "Non-binary" gender option is missing             | -Manual exploratory-                                   | Medium   | This radio option is completely missing. Marked as medium, as the form may still be usable.                     |
| Date of Birth field format is incorrect           | Form is submitted complete with expected field values  | Medium   | Expected: YYYY-MM-DD, Actual: MM/DD/YYYY. Marked as medium, as the form may still be usable.                    |                     

📖 [Go to the Scenarios with steps](../tests/features/user_profile_creation_visitor_smoke.feature)

# UAT & Recommendations

- The use of browser alert messages (in this implementation for indicating validation errors on form submit) is outdated. It may be foreign to a younger audience. It may be suppressed by extensions, which would result in loss of functionality. In-line, visual validation indicators recommended.
- For gender selection a drop-down would be more economical.