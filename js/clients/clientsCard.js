export const createClientCard = (item) => {
  const card = document.createElement('div');

  card.className = 'card client-card';

  const img = document.createElement('img');
  img.src = item.image;
  img.alt = item.name;
  img.className = 'client-card__image';

  const name = document.createElement('p');
  name.className = 'client-card__text';
  name.textContent = item.name;

  card.append(img, name);

  return card;
};
