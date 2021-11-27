import { listOfPeopleMarkup, skillDetailsMarkup } from './scripts/markupGenerators.js';
import { resetHTMLElement, addEventHandlerToElementsOfClass } from './scripts/helpers.js';

const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-btn');
const peopleContainer = document.querySelector('#people-container');
const modalContent = document.querySelector('#modal-content');

const handleViewingSkill = async (e) => {
  resetHTMLElement(modalContent);
  const { username, skillname } = e.currentTarget.dataset;
  const searchByUsernameURL = `https://torre.bio/api/bios/${username}`;
  const result = await fetch(searchByUsernameURL);
  const data = await result.json();
  const skillOfInterest = data.strengths.find((elt) => elt.name === skillname);
  modalContent.innerHTML = skillDetailsMarkup(skillOfInterest);
};

searchButton.addEventListener('click', async () => {
  resetHTMLElement(peopleContainer);
  const searchValue = searchInput.value.trim();
  if (searchValue.length === 0) return;
  const searchPeopleURL = `https://search.torre.co/people/_search/?${searchValue}`;
  const result = await fetch(searchPeopleURL, { method: 'POST' });
  const data = await result.json();
  peopleContainer.innerHTML = listOfPeopleMarkup(data.results);
  addEventHandlerToElementsOfClass('badge', handleViewingSkill);
});
