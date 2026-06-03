const URLS = {
  clients: 'https://rickandmortyapi.com/api/character',
  products: 'https://fakestoreapi.com/products?limit=6',
  feedback: 'https://fakerapi.it/api/v1/texts?_quantity=6&_characters=300',
};

const makeRequest = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Request failed');
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

const api = {
  getClients() {
    return makeRequest(URLS.clients);
  },
  getProducts() {
    return makeRequest(URLS.products);
  },
  getFeedback() {
    return makeRequest(URLS.feedback);
  },
};

export { api };
