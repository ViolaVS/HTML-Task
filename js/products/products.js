import { api } from '../shared/api.js';
import { createProductCard } from './productCard.js';
import { openErrorModal } from '../shared/modal.js';

export const showProducts = async (block) => {
  try {
    block.innerHTML = `<div class="loader"></div>`;

    const data = await api.getProducts();
    block.replaceChildren();

    const fragment = document.createDocumentFragment();
    data.forEach((el) => fragment.append(createProductCard(el)));
    block.append(fragment);
  } catch (error) {
    console.error(error);
    openErrorModal();
  }
};
