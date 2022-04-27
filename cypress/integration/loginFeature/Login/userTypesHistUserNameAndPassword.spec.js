import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { baseUrl } from '../../../support/utils/environments'
import * as userTypesHistUserNameAndPassword from '../scenarios/userTypesHistUserNameAndPassword'
Given('the user is in the sign page', () => {
  cy.visit(baseUrl)
})

When('the user sign into the application', () => {
  userTypesHistUserNameAndPassword.userSignIn()
})

Then('the user must type his OTP', () => {
  userTypesHistUserNameAndPassword.userMustTypeOTP()
})
