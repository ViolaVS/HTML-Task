import { showClients } from './clients/clients.js';
import { showProducts } from './products/products.js';
import { showFeedback } from './feedback/feedback.js';
import { handleSumbitForm } from './shared/validateForm.js';
import { closeBurger } from './shared/burger.js';

const routes = {
  clients: showClients,
  products: showProducts,
  feedback: showFeedback,
};

const content = document.querySelector('.portfolio__library');
const navigate = async (path) => {
  const page = routes[path] || showClients;
  setActiveLink(path);
  content.replaceChildren();

  await page(content);
};

const setActiveLink = (path) => {
  document.querySelectorAll('.link').forEach((link) => {
    link.classList.toggle('active', link.id === path);
  });
};

document.addEventListener('click', (e) => {
  const link = e.target.closest('.link');
  if (!link) return;
  const path = link.id;
  e.preventDefault();
  history.pushState({}, '', `/${path}`);
  navigate(path);
});

navigate(location.pathname.replace('/', '') || 'clients');
