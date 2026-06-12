export const createProductCard = (item) => {
  const card = document.createElement('div');

  card.className = 'card product-card';

  const img = document.createElement('img');
  img.src = item.image;
  img.alt = item.title;
  img.className = 'product-card__image';

  const name = document.createElement('p');
  name.className = 'product-card__text';
  name.textContent = item.title;

  card.append(img, name);

  return card;
};
