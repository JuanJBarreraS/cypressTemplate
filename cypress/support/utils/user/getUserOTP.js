import { user } from '../environments'

const getUserOTP = (cb, userName = user.name) => { // use default values to avoid repeat yourself in the code
  // eslint-disable-next-line n/no-callback-literal
  cb(123465) // some random OTP code, actually you should get it from DB and handle errors as needed
}

export {
  getUserOTP
}
