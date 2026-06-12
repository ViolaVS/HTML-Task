import { openFormSubmitModal } from './modal.js';

const form = document.querySelector('.portfolio__form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const checkbox = document.querySelector('#checkbox');

const nameError = document.querySelector('.name-error');
const emailError = document.querySelector('.email-error');
const checkboxError = document.querySelector('.checkbox-error');

const handleSumbitForm = (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  const isChecked = checkbox.checked;

  nameError.textContent = '';
  emailError.textContent = '';
  checkboxError.textContent = '';

  let isValid = true;

  if (name === '') {
    nameError.textContent = 'Please enter your first name.';
    isValid = false;
  }
  if (!isEmailValid) {
    emailError.textContent = 'Please enter a valid email adress.';
    isValid = false;
  }

  if (!isChecked) {
    checkboxError.textContent = 'Please consent to the prossesing of personal data';
    isValid = false;
  }
  if (isValid) {
    openFormSubmitModal(name, email);
    form.reset();
  }
};

form.addEventListener('submit', handleSumbitForm);

export { handleSumbitForm };
