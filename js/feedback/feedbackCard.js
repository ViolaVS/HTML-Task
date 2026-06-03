export const createFeedbackCard = (item) => {
  const card = document.createElement('div');
  card.className = 'card feedback-card';

  const title = document.createElement('p');
  title.className = 'feedback-card__title';
  title.textContent = item.title;

  const feedback = document.createElement('p');
  feedback.className = 'feedback-card__content';
  feedback.textContent = item.content;

  const name = document.createElement('p');
  name.className = 'client-card__name';
  name.textContent = item.author;

  card.append(title, feedback, name);

  return card;
};
