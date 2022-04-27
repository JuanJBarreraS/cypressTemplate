import loginForm from '../../../../support/pageObjects/login/loginForm'
import { getUserOTP } from '../../../../support/utils/user'
// import * as userUtils from '../../../../support/utils/user' // use this syntax to import multiple utils from same file

const userMustTypeOTP = () => {
  loginForm.verifySpan.verifyElementPresent()
  getUserOTP((userOTP) => {
    loginForm.otpInput.type(userOTP)
  })
  // userUtils.getUserOTP((userOTP) => { ... }) // use this syntax with import *
  loginForm.continueButtonOtp.click()
}

export { userMustTypeOTP }
