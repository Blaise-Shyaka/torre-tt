import listOfPeopleMarkup from './scripts/markupGenerators.js';
import resetHTMLElement from './scripts/helpers.js';

const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-btn');
const peopleContainer = document.querySelector('#people-container');

searchButton.addEventListener('click', async () => {
  resetHTMLElement(peopleContainer);

  const searchValue = searchInput.value.trim();
  if (searchValue.length === 0) return;

  const searchPeopleURL = `https://search.torre.co/people/_search/?${searchValue}`;
  const result = await fetch(searchPeopleURL, { method: 'POST' });
  const data = await result.json();

  console.log(data);

  peopleContainer.innerHTML = listOfPeopleMarkup(data.results);
});
