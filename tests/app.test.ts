
import { isEmail, getBaseURL } from '../src/utils';
import { onClickSignup, onKeyupEmailInput, onFocusEmailInput, onBlurEmailInput } from '../src/events';

describe('code', () => {
    beforeEach(() => {
        // Jest uses jsdom as the default test environment which emulates
        // a browser and provides a document object for the unit tests.
        // Initialize the document body with the HTML needed for the tests
        document.body.innerHTML += `
            <div class="container">
                <div class="inline-form">
                    <label class="inline-form__label">Join the mailing list</label>
                    <div class="inline-form__control">
                    <input type="text" id="email" placeholder="Your email" />
                    <button class="button" id="signup">Sign up</button>
                    </div>
                    <span class="inline-form__error email-error">This email address is not valid</span>
                </div>
            </div>
        `;
   
        afterEach(() => {
            // resetModules() resets the module registry in Jest and ensures
            // a fresh copy of './code' executes on require()
            jest.resetModules();
        });
    })

    it('Email validation util func', () => {
        expect(isEmail('qweqwe@gmail.com')).toBe(true);
        expect(isEmail('qweqwe@@@gmail.com')).toBe(false);
    });

    it('onClickSignup process', () => {
        const emailInputElm: HTMLInputElement = document.querySelector('#email');
        const emailErrorElem: HTMLElement = document.querySelector('.email-error');

        onClickSignup(new Event('click'), emailInputElm, emailErrorElem)
    });

    it('onKeyupEmailInput process', () => {
        const emailInputElm: HTMLInputElement = document.querySelector('#email');
        const signupBtnElm: HTMLElement = document.querySelector('#signup');
        const emailErrorElem: HTMLElement = document.querySelector('.email-error');
        onKeyupEmailInput(new Event('keyup'), emailInputElm, emailErrorElem, signupBtnElm)
    });

    it('onFocusEmailInput process', () => {
        const emailInputElm: HTMLInputElement = document.querySelector('#email');
        const emailErrorElem: HTMLElement = document.querySelector('.email-error');
        const signupBtnElm: HTMLElement = document.querySelector('#signup');
        
        onFocusEmailInput(new Event('focus'), emailInputElm, emailErrorElem, signupBtnElm)
    });

    it('onBlurEmailInput process', () => {
        const emailInputElm: HTMLInputElement = document.querySelector('#email');
        const emailErrorElem: HTMLElement = document.querySelector('.email-error');
        const signupBtnElm: HTMLElement = document.querySelector('#signup');
        
        onBlurEmailInput(new Event('blur'), emailInputElm, emailErrorElem, signupBtnElm)
        expect(signupBtnElm.classList.contains('disabled')).toBe(false);

    });
})
