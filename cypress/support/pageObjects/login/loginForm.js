import { Button, CheckBox, Input, Span } from '../../utils/genericElements/generics'

const userNameInput = Input({
  attributes: {
    'data-testid': 'usernameInput'
  }
})

const continueButton = Button({
  attributes: {
    'data-testid': 'btn-sign-in-username'
  }
})

const passwordInput = Input({
  attributes: {
    'data-testid': 'passwordInput'
  }
})

const signInButton = Button({
  attributes: {
    'data-testid': 'btn-sign-in-password'
  }
})

const rememberMeCheckbox = CheckBox({
  attributes: {
    'data-testid': 'check-remember-my-device'
  }
})

const verifySpan = Span({
  text: 'Verify your email'
})

const otpInput = Input({
  attributes: {
    'data-testid': 'btn-input_0'
  }
})

const continueButtonOtp = Button({
  attributes: {
    'data-testid': 'btn-email-verification-continue'
  }
})
export default {
  userNameInput,
  continueButton,
  passwordInput,
  signInButton,
  rememberMeCheckbox,
  verifySpan,
  otpInput,
  continueButtonOtp
}
