Feature: Login

  Here description

  Background: background example
    Given Background given example
    When When example
    Then Then example

  # use at least one tag that describe the purpose of the scenario to define the folder name inside scenario folder
  # use @wip to mark scenarios as work in progress
  # optional, use @JIRA-ID to link to JIRA HU
  @userTypesHisUserNameAndPassword
  @wip
  Scenario: User types his username and password
    Given the user is in the sign page
    When the user sign into the application
    Then the user must type his OTP
