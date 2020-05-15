import axios from 'axios';
import { isEmail, getBaseURL } from './utils';

// post event
const onClickSignup = (event, emailInputElm, emailErrorElem) => {
  event.stopPropagation();

  const { value } = emailInputElm;

  if (!isEmail(value)) {
    emailErrorElem.classList.add('active');
    return null;
  }

  const url = getBaseURL();
  const data = { email: value };

  return axios.post(url, data);
};

// email input validation with key board type
const onKeyupEmailInput = (event, emailInputElm, emailErrorElem, signupBtnElm) => {
  event.stopPropagation();

  const { value }: { value: string } = emailInputElm;
  if (isEmail(value)) {
    signupBtnElm.classList.remove('disabled');
  } else if (signupBtnElm.classList.value.indexOf('disabled') === -1) {
    signupBtnElm.classList.add('disabled');
  }
};

// focus style
const onFocusEmailInput = (event, emailInputElm, emailErrorElem, signupBtnElm) => {
  event.stopPropagation();
  signupBtnElm.classList.add('disabled');
  emailInputElm.parentElement.classList.add('active');
  emailErrorElem.classList.remove('active');
};

// blur style
const onBlurEmailInput = (event, emailInputElm, emailErrorElem, signupBtnElm) => {
  event.stopPropagation();
  signupBtnElm.classList.remove('disabled');
  emailInputElm.parentElement.classList.remove('active');
};

export { onClickSignup, onKeyupEmailInput, onFocusEmailInput, onBlurEmailInput };
