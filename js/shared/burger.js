const close = document.querySelector('.burger-close');
const burger = document.querySelector('.burger');
const overlay = document.getElementById('overlay');
const sideMenu = document.querySelector('.side-menu');

export const openBurger = () => {
  overlay.classList.remove('hidden');
  sideMenu.classList.remove('hidden');
  burger.classList.add('hidden');
};

export const closeBurger = () => {
  overlay.classList.add('hidden');
  sideMenu.classList.add('hidden');
  burger.classList.remove('hidden');
};

burger.addEventListener('click', (e) => {
  e.stopPropagation();
  openBurger();
});

close.addEventListener('click', (e) => {
  e.stopPropagation();
  closeBurger();
});
