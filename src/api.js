const BASE_URL = 'https://rickandmortyapi.com/api';

export const getHaracters = () => (
  fetch(`${BASE_URL}/character`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('can\'t upload your data');
      }

      return response.json();
    })
    .then((response) => response.results)
);
