import { api } from '../shared/api.js';
import { createFeedbackCard } from './feedbackCard.js';
import { openErrorModal } from '../shared/modal.js';

export const showFeedback = async (block) => {
  try {
    block.innerHTML = `<div class="loader"></div>`;
    const data = await api.getFeedback();
    block.replaceChildren();
    const fragment = document.createDocumentFragment();
    data.data.forEach((item) => {
      fragment.append(createFeedbackCard(item));
    });
    block.append(fragment);
  } catch (error) {
    console.error(error);
    openErrorModal();
  }
};
