import { api } from '../shared/api.js';
import { createClientCard } from './clientsCard.js';
import { openErrorModal } from '../shared/modal.js';

export const showClients = async (block) => {
  try {
    block.innerHTML = `<div class="loader">Loading....</div>`;

    const data = await api.getClients();
    block.replaceChildren();

    const fragment = document.createDocumentFragment();
    data.results.forEach((el) => fragment.append(createClientCard(el)));
    block.append(fragment);
  } catch (error) {
    console.error(error);
    openErrorModal();
  }
};
