const errorModal = document.getElementById('error-modal');
const formModal = document.getElementById('form-modal');
const overlay = document.getElementById('overlay');

export const openErrorModal = () => {
  overlay.classList.remove('hidden');
  errorModal.classList.remove('hidden');
};

export const closeModal = (modal) => {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

document.querySelectorAll('.modal').forEach((modal) => {
  modal.querySelector('.close').addEventListener('click', () => closeModal(modal));
});

const formModalText = document.getElementById('form-modal-text');
export const openFormSubmitModal = (name, email) => {
  formModalText.innerHTML = `
  <p>Form submited successfully!</p>
  <p> ${name}</p>
  <p>${email}</p> 
  `;

  formModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
