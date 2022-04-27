import loginForm from '../../../../support/pageObjects/login/loginForm'
import { user } from '../../../../support/utils/environments'

const userSignIn = () => {
  loginForm.userNameInput.type(user.name)
  loginForm.continueButton.click()
  loginForm.passwordInput.type(user.password)
  loginForm.signInButton.click()
}

export {
  userSignIn
}
