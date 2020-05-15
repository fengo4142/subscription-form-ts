require('file-loader?name=[name].[ext]!../public/index.html');

// app.ts
import { signupBtnElm, emailInputElm, emailErrorElem } from './ui';
import { onClickSignup, onKeyupEmailInput, onFocusEmailInput, onBlurEmailInput } from './events';

import '../scss/style.scss';

signupBtnElm.addEventListener('click', (event) => onClickSignup(event, emailInputElm, emailErrorElem));
emailInputElm.addEventListener('focus', (event) =>
  onFocusEmailInput(event, emailInputElm, emailErrorElem, signupBtnElm)
);
emailInputElm.addEventListener('blur', (event) => onBlurEmailInput(event, emailInputElm, emailErrorElem, signupBtnElm));
emailInputElm.addEventListener('keyup', (event) =>
  onKeyupEmailInput(event, emailInputElm, emailErrorElem, signupBtnElm)
);
