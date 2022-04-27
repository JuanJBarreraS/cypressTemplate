import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

import * as background from '../background'

Given('Background given example', () => {
  background.backgroundGivenExampleImplementation()
})

When('When example', () => {
  background.whenExample()
})

Then('Then example', () => {
  background.thenStepImplementation()
})
