import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { baseUrl } from '../../../support/utils/environments'
import * as userTypesHisUserNameAndPassword from '../scenarios/userTypesHisUserNameAndPassword'
Given('the user is in the sign page', () => {
  cy.visit(baseUrl)
})

When('the user sign into the application', () => {
  userTypesHisUserNameAndPassword.userSignIn()
})

Then('the user must type his OTP', () => {
  userTypesHisUserNameAndPassword.userMustTypeOTP()
})
